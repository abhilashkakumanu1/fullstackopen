import React from "react";

export default function Persons({ persons, onDelete }) {
  return (
    <>
      {persons.map((person) => (
        <p key={person.id}>
          {person.name} {person.number}{" "}
          <button onClick={() => onDelete(person.id)}>delete</button>
        </p>
      ))}
    </>
  );
}
