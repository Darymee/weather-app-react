import React from "react";
import ForecastItem from "../ForecastItem/ForecastItem";

export default function Forecast() {
  return (
    <ul className="list-group list-group-horizontal row">
      <ForecastItem temperature={20} day="Saturday" icon="⛅️" />
      <ForecastItem temperature={30} day="Sunday" icon="☀️" />
      <ForecastItem temperature={15} day="Monday" icon="🌦️️" />
      <ForecastItem temperature={18} day="Tuesday" icon="🌥️" />
      <ForecastItem temperature={12} day="Wednesday" icon="🌩️" />
    </ul>
  );
}
