import React from "react";

const CountryList = ({ countries, error }) => {
  if (error) {
    return <p>Enter a valid country name</p>;
  }
  if (countries.length > 10) {
    return <p>Too many matches, specify another field</p>;
  } else if (countries.length === 1) {
    const country = countries[0];
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
  } else {
    return (
      <>
        {countries.map((country) => (
          <p key={country.name}>{country.name}</p>
        ))}
      </>
    );
  }
};

export default CountryList;
