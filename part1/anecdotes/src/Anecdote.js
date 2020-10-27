import React from "react";

export default function Anecdote({ heading, text }) {
  return (
    <>
      <h2>{heading}</h2>
      <p>{text}</p>
    </>
  );
}
