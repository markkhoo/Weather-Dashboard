import { React, useState, useEffect } from "react";
import Header from "./components/header/header";
import API from "./utils/API";

import './App.css';

function App() {
  const [getCity, setCity] = useState("");
  const [getUnit, setUnit] = useState("imperial");

  useEffect(() => {
    let lastCity = JSON.parse(localStorage.getItem("last_city"));

    if (lastCity != null) {
      findWeather(lastCity, getUnit);
    } else {
      localStorage.setItem("last_city", JSON.stringify("San Francisco"));
      findWeather("San Francisco", getUnit);
    };
  }, []);

  const findWeather = (city, units) => {
    if (city) {

      API.searchCity(city, units).then(res => {
        console.log(res.data)
      }).catch(err => console.log(err))

    } else {
      console.log("invalid input")
    }
  };

  const writeCity = event => {
    setCity(event.target.value.toLowerCase());
    // console.log(getCity);
  };

  const submitCity = event => {
    event.preventDefault();
    findWeather(getCity, getUnit);
    localStorage.setItem("last_city", JSON.stringify(getCity));
  };

  return (
    <>
      <Header />

      <form onSubmit={submitCity} >
        <input
          type="text"
          onChange={writeCity}
          placeholder="San Francisco"
        />
        <input 
          type="submit"
          value="Submit"
        />
      </form>

    </>
  );
}

export default App;
