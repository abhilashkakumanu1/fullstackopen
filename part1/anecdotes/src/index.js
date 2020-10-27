import React, { useState } from "react";
import ReactDOM from "react-dom";

import Anecdote from "./Anecdote";
import Button from "./Button";

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const changeAnecdote = () => {
    const randomNum = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNum);
  };

  const zeroArray = new Array(anecdotes.length).fill(0);
  const [points, setPoints] = useState(zeroArray);

  const increasePoints = (index) => {
    const copy = [...points];
    copy[index]++;
    // console.log(copy);
    setPoints(copy);
  };

  const max = points.indexOf(Math.max(...points));

  return (
    <>
      <Anecdote heading="Anecdote of the day" text={anecdotes[selected]} />
      <p>has {points[selected]} votes</p>
      <Button text="vote" handleClick={() => increasePoints(selected)} />
      <Button text="next anecdote" handleClick={changeAnecdote} />
      <Anecdote heading="Anecdote with most votes" text={anecdotes[max]} />
    </>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
