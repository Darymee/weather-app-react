import React from "react";

import "./TodayInfo.css";

export default function TodayInfo({ humidity, wind, pressure, icon_id }) {
  let url = `https://openweathermap.org/img/wn/${icon_id}@2x.png`;
  return (
    <div className="col">
      <img
        src={
          icon_id
            ? url
            : "https://cdn-icons-png.flaticon.com/512/116/116251.png"
        }
        alt="weather icon"
        id="icon"
        className="big-icon mb-4"
      />

      <div className="row">
        <div className="col p-0">
          <p className="info">
            Humidity:
            <br />
            <span className="info-value" id="humidity">
              {humidity || 48}%
            </span>
          </p>
        </div>
        <div className="col p-0">
          <p className="info">
            Wind speed:
            <br />
            <span className="info-value" id="wind-speed">
              {Math.round(wind) || 6} km/h
            </span>
          </p>
        </div>
        <div className="col p-0">
          <p className="info">
            Pressure:
            <br />
            <span className="info-value" id="pressure">
              {pressure || 1000} Gpa
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
