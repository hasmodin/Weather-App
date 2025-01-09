import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import WeatherInfo from "./WeatherInfo.jsx";

import { useState } from "react";

import "./SearchBox.css";
import GetWeatherInfo from "./GetWeatherInfo.jsx";
import axios from "axios";

export default function SearchBox({ updateInfo }) {
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "fa4a257e597274935d70b14afbd44a94";

  const [city, setCity] = useState("");
  const [submitted, setSubmittedData] = useState("");

  const getData = async () => {
    const response = await axios.get(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );

    let result = {
      city: city,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      feels: response.data.main.feels_like,
      max_temp: response.data.main.temp_max,
      min_temp: response.data.main.temp_min,
      description: response.data.weather[0].description,
    };

    return result;
  };
  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleClick = async (event) => {
    event.preventDefault();
    let newInfo = await getData();
    updateInfo(newInfo);
    console.log(city);
    console.log(newInfo);
    setCity("");
  };

  return (
    <>
      <div className="searchBox">
        <h1>Search for weather based on city!</h1>
        <form action="">
          <TextField
            className="input"
            id="city"
            label="City"
            variant="outlined"
            value={city}
            onChange={handleInputChange}
            required
          />
          <Button
            type="submit"
            variant="contained"
            onClick={handleClick}
            className="button"
          >
            Search
          </Button>
        </form>
      </div>
    </>
  );
}
