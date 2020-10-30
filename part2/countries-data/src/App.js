import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryList from "./CountryList";

const App = () => {
  const [searchCountry, setSearchCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(true);

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${searchCountry}`)
      .then((response) => {
        setCountries(response.data);
        setError(false);
      })
      .catch((error) => {
        setError(true);
      });
  }, [searchCountry]);

  const handleChange = (e) => {
    setSearchCountry(e.target.value);
  };

  return (
    <>
      <div>
        find countries <input value={searchCountry} onChange={handleChange} />
      </div>
      <CountryList {...{ countries, error }} />
    </>
  );
};

export default App;
