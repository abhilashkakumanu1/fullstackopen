import React from "react";

export default function Statistics({ good, neutral, bad }) {
  const all = good + neutral + bad;
  return (
    <>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {(good - bad) / all}</p>
      <p>positive {(good / all) * 100} %</p>
    </>
  );
}
