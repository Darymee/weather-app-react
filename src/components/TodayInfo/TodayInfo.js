import React from "react";

import "./TodayInfo.css";

export default function TodayInfo({ humidity, wind, pressure, icon_url }) {
  return (
    <div className="col">
      <img src={icon_url} alt="weather icon" className="big-icon mb-4" />

      <div className="row">
        <div className="col p-0">
          <p className="info">
            Humidity:
            <br />
            <span className="info-value">{humidity}%</span>
          </p>
        </div>
        <div className="col p-0">
          <p className="info">
            Wind speed:
            <br />
            <span className="info-value">{Math.round(wind)} km/h</span>
          </p>
        </div>
        <div className="col p-0">
          <p className="info">
            Pressure:
            <br />
            <span className="info-value">{pressure} Gpa</span>
          </p>
        </div>
      </div>
    </div>
  );
}
