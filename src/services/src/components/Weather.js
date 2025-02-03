import React, { useState } from "react";
import { getWeather } from "../services/weatherService";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    if (!city) return;
    const data = await getWeather(city);
    setWeather(data);
  };

  return (
    <div className="weather-container">
      <h2>Weather App</h2>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {weather && (
        <div className="weather-info">
          <h3>{weather.name}, {weather.sys.country}</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
