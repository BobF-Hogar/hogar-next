import React from "react";
import { useSelector } from "react-redux";

import { selectWeather } from "../../../redux/weather";

import "./Weather.css";

const Weather: React.FC = () => {
    const weather = useSelector(selectWeather);
    const icon = weather?.weather[0]?.icon || '10d';
    const iconWeather = `https://openweathermap.org/img/w/${icon}.png`;

    return <div id="weather-widget">
        <div id="weather-city">{weather?.name || "-"}</div>
        <div id="weather-row-temperature">
            <div id="weather-temperature">{weather ? `${Math.floor(weather.main.temp)}˚C` : ""}</div>
            {weather && <div id="weather-icon" style={{backgroundImage: `url('${iconWeather}')`}} />}
        </div>
        <div id="weather-row-humidity">
            <div id="weather-humidity">{weather ? `${weather.main.humidity}%` : ""}</div>
            <div id="weather-conditions">{weather?.weather[0]?.description || ""}</div>
        </div>
    </div>;
}

export default Weather;