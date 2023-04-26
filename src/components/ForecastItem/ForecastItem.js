import React from "react";

import "./ForecastItem.css";

export default function ForecastItem({ min, max, day, icon }) {
  function getDay() {
    let currentDay = new Date(day * 1000);

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let dayOfWeek = days[currentDay.getDay()];

    return dayOfWeek;
  }

  return (
    <li className="list-group-item item col border-0">
      <img src={icon} alt="weather" className="weather-icon" />

      <p className="day">{getDay()}</p>
      <p className="item-temperature">
        <span className="max">{max}°</span> | <span>{min}°</span>
      </p>
    </li>
  );
}
