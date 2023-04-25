import React from "react";

import "./TodayReport.css";

export default function TodayReport({ description, temperature }) {
  return (
    <div className="col">
      <h1 className="mb-2 today-text text-center">Today's Report</h1>
      <div className="wrapper">
        <p className="mb-2 weather description">{description}</p>
        <div className="row">
          <div className="col">
            <p className="temperature">{Math.round(temperature)}</p>
          </div>
          <div className="col button-wrapper">
            <button type="button" className="type">
              °C
            </button>
            <span className="separator">|</span>
            <button type="button" className="type">
              °F
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
