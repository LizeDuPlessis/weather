import React from "react";
import Card from "./Card";

function WeatherItems({ weather }) {
  return (
    <Card>
      <h3>City: {weather.name}</h3>
      <h3>Temperature: {weather.main?.temp}</h3>
      <h3> Humidity: {weather.main?.humidity}</h3>
      <h3> Wind Speed: {weather.wind?.speed}</h3>
    </Card>
  );
}

export default WeatherItems;
