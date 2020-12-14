import React, { useState, useEffect } from "react";
import "./index.css";

import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import Notification from "./Notification";

import services from "./services/phonebook";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [notification, setNotification] = useState({ type: "", message: null });

  useEffect(() => {
    services.getAll().then((response) => setPersons(response));
  }, []);

  const addName = (event) => {
    event.preventDefault();

    const matchingPerson = persons.filter(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    )[0];

    // Update existing user number
    if (matchingPerson) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        services
          .update(matchingPerson.id, { name: newName, number: newNumber })
          .then((res) => {
            const updatedPersons = persons.map((person) => {
              if (person.name.toLowerCase() !== newName.toLowerCase()) {
                return person;
              }
              return res;
            });
            setPersons(updatedPersons);
            setNewName("");
            setNewNumber("");

            setNotification({
              type: "success",
              message: `Updated ${newName}'s number`,
            });
            setTimeout(() => {
              setNotification({ type: "", message: null });
            }, 5000);
          })
          .catch((err) => console.log(err));
      }
    }
    // Adding new user
    else {
      services
        .create({ name: newName, number: newNumber })
        .then((res) => {
          setPersons([...persons, res]);
          setNewName("");
          setNewNumber("");

          setNotification({
            type: "success",
            message: `Added ${newName}`,
          });
          setTimeout(() => {
            setNotification({ type: "", message: null });
          }, 5000);
        })
        .catch((err) => {
          setNewName("");
          setNewNumber("");

          setNotification({
            type: "error",
            message: err.message,
          });
          setTimeout(() => {
            setNotification({ type: "", message: null });
          }, 5000);
        });
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const onDelete = (id) => {
    const person = persons.filter((person) => person.id === id)[0];
    if (window.confirm(`Delete ${person.name} ?`)) {
      services
        .deletePerson(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id));
        })
        .catch((err) => {
          setNotification({
            type: "error",
            message: `Information of ${person.name} has already been removed from the server`,
          });
          setTimeout(() => {
            setNotification({ type: "", message: null });
          }, 5000);
          services.getAll().then((response) => setPersons(response)); // Updating the list again
        });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification type={notification.type} message={notification.message} />
      <Filter {...{ searchTerm, handleSearchChange }} />
      <h2>add a new contact</h2>
      <PersonForm
        {...{
          addName,
          newName,
          newNumber,
          handleNameChange,
          handleNumberChange,
        }}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons.filter((person) =>
          person.name.toLowerCase().includes(searchTerm.toLowerCase())
        )}
        onDelete={onDelete}
      />
    </div>
  );
};

export default App;
