import React from "react";

import "./ForecastItem.css";

export default function ForecastItem({ temperature, day, icon }) {
  return (
    <li className="list-group-item item col border-0">
      <p className="weather-icon">
        <span role="img" aria-label="weather">
          {icon}
        </span>
      </p>
      <p className="day">{day}</p>
      <p className="item-temperature">{temperature}°</p>
    </li>
  );
}
