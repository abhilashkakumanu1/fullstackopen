import React from "react";
import Button from "./Button";

const Country = ({ country, handleClick, detailedView }) => {
  if (!detailedView) {
    return (
      <div>
        <span>{country.name}</span>
        <Button text="show" handleClick={handleClick} />
      </div>
    );
  } else {
    return (
      <>
        <h1>{country.name}</h1>
        <p>capial {country.capital}</p>
        <p>population {country.population}</p>
        <h2>languages</h2>
        <ul>
          {country.languages.map((language) => (
            <li key={language.name}>{language.name}</li>
          ))}
        </ul>
        <img src={country.flag} alt="flag" style={{ width: 150 }} />
      </>
    );
  }
};

export default Country;
