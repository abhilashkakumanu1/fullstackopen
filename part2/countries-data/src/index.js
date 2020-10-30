import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import axios from "axios";

import CountryList from "./CountryList";

const App = () => {
  const [searchCountry, setSearchCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(false);
  const [detailedView, setDetailedView] = useState([]);

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${searchCountry}`)
      .then((response) => {
        setCountries(response.data);
        if (response.data.length <= 10) {
          setDetailedView(Array(response.data.length).fill(false));
        }
        setError(false);
      })
      .catch((error) => {
        setError(true);
      });
  }, [searchCountry]);

  const handleChange = (e) => {
    setSearchCountry(e.target.value);
  };

  const handleClick = (name, index) => {
    setDetailedView(detailedView.map((e, i) => (i === index ? true : e)));
  };

  return (
    <>
      <div>
        find countries <input value={searchCountry} onChange={handleChange} />
      </div>
      <CountryList {...{ countries, error, handleClick, detailedView }} />
    </>
  );
};

render(<App />, document.getElementById("root"));
