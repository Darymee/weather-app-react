import React, { useState } from "react";

import "./TodayReport.css";

export default function TodayReport({ description, temperature }) {
  const [units, setUnits] = useState("celsius");

  function changeToFahrenheit() {
    setUnits("fahrenheit");
  }

  function changeToCelsius() {
    setUnits("celsius");
  }

  function showFahrenheit() {
    return temperature * (9 / 5) + 32;
  }

  return (
    <div className="col">
      <h1 className="mb-2 today-text text-center">Today's Report</h1>
      <div className="wrapper">
        <p className="mb-2 weather description">{description}</p>
        {units === "celsius" ? (
          <div className="row">
            <div className="col">
              <p className="temperature">{Math.round(temperature)}</p>
            </div>
            <div className="col button-wrapper">
              <button
                type="button"
                className="type checked"
                disabled={units === "celsius"}
              >
                °C
              </button>
              <span className="separator">|</span>
              <button
                type="button"
                className="type"
                disabled={units === "fahrenheit"}
                onClick={changeToFahrenheit}
              >
                °F
              </button>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col">
              <p className="temperature">{Math.round(showFahrenheit())}</p>
            </div>
            <div className="col button-wrapper">
              <button
                type="button"
                className="type"
                disabled={units === "celsius"}
                onClick={changeToCelsius}
              >
                °C
              </button>
              <span className="separator">|</span>
              <button
                type="button"
                className="type checked"
                disabled={units === "fahrenheit"}
              >
                °F
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
