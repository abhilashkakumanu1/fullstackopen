import React, { useState } from "react";

import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const addName = (event) => {
    event.preventDefault();
    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      setPersons([...persons, { name: newName, number: newNumber }]);
      setNewName("");
      setNewNumber("");
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
          person.name.toLowerCase().includes(searchTerm)
        )}
      />
    </div>
  );
};

export default App;
