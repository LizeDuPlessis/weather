import React from "react";
import { useState, useEffect } from "react";
// import WeatherItems from "./WeatherItems";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

function WeatherContainer() {
  const [weather, setWeather] = useState({});
  const [userSearch, setUserSearch] = useState("");

  useEffect(() => {
    const getWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=${API_KEY}`
        );
        const data = await response.json();
        setWeather(data);
      } catch (err) {
        console.error(err);
      }
    };
    getWeather();
  }, []);

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    const getNewWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${userSearch}&units=metric&appid=${API_KEY}`
        );
        const data = await response.json();
        setWeather(data);
      } catch (err) {
        console.error(err);
      }
    };
    getNewWeather();
  };

  console.log(weather);
  console.log(userSearch);

  return (
    <div>
      <h1>{userSearch}</h1>
      <form role="search" onSubmit={handleSubmitSearch}>
        <input
          type="text"
          placeholder="Search here..."
          name="search"
          id="search"
          title="search weather in place"
          onChange={(e) => setUserSearch(e.target.value)}
        />
        <button>Submit</button>
      </form>
      {/* <WeatherItems weather={weather} /> */}
      <div>
        <h3>City: {weather.name}</h3>
        <h3>Temperature: {weather.main?.temp}</h3>
        <h3> Humidity: {weather.main?.humidity}</h3>
        <h3> Wind Speed: {weather.wind?.speed}</h3>
      </div>
    </div>
  );
}

export default WeatherContainer;
