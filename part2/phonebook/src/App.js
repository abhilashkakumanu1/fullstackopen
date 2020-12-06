import React, { useState, useEffect } from "react";

import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

import services from "./services/phonebook";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    services.getAll().then((response) => setPersons(response));
  }, []);

  const addName = (event) => {
    event.preventDefault();

    const matchingPerson = persons.filter(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    )[0];

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
          })
          .catch((err) => console.log(err));
      }
    } else {
      services
        .create({ name: newName, number: newNumber })
        .then((res) => {
          setPersons([...persons, res]);
          setNewName("");
          setNewNumber("");
        })
        .catch((err) => console.log(err));
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
      services.deletePerson(id).then(() => {
        setPersons(persons.filter((person) => person.id !== id));
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
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
