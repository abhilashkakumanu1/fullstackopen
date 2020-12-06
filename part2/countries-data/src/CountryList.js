import React from "react";

import Country from "./Country";

const CountryList = ({
  countries,
  error,
  handleClick,
  detailedView,
  getWeatherData,
}) => {
  if (error) {
    return <p>Enter a valid country name</p>;
  }
  if (countries.length > 10) {
    return <p>Too many matches, specify another field</p>;
  } else if (countries.length === 1) {
    const country = countries[0];
    return <Country country={country} detailedView={true} />;
  } else {
    return (
      <>
        {countries.map((country, index) => (
          <Country
            key={country.name}
            country={country}
            handleClick={() => handleClick(country.name, index)}
            detailedView={detailedView[index]}
          />
        ))}
      </>
    );
  }
};

export default CountryList;
