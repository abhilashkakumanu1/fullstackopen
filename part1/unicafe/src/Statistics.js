import React from "react";
import Statistic from "./Statistic";

export default function Statistics({ good, neutral, bad }) {
  const all = good + neutral + bad;
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </>
    );
  }
  return (
    <>
      <h2>statistics</h2>
      <table>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={all} />
          <Statistic text="average" value={(good - bad) / all} />
          <Statistic text="positive" value={`${(good / all) * 100} %`} />
        </tbody>
      </table>
    </>
  );
}
