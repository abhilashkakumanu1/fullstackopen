import React from "react";
import Part from "./Part";

const Content = ({ part1, part2, part3 }) => {
  return (
    <>
      <Part {...part1} />
      <Part {...part2} />
      <Part {...part3} />
    </>
  );
};

export default Content;
