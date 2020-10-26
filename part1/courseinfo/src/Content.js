import React from "react";
import Part from "./Part";

const Content = ({ parts }) => {
  const [part1, part2, part3] = parts;
  return (
    <>
      <Part {...part1} />
      <Part {...part2} />
      <Part {...part3} />
    </>
  );
};

export default Content;
