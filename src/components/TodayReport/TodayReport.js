import React, { useState } from "react";

import "./TodayReport.css";

export default function TodayReport({ description, temperature }) {
  return (
    <div className="col">
      <h1 className="mb-2 today-text text-center">Today's Report</h1>
      <div className="wrapper">
        <p className="mb-2 weather description" id="description">
          {description || "It's rainy"}
        </p>
        <div className="row">
          <div className="col">
            <p className="temperature" id="temperature">
              {Math.round(temperature) || 25}
            </p>
          </div>
          <div className="col button-wrapper">
            <button type="button" className="type" id="celsius">
              °C
            </button>
            <span className="separator">|</span>
            <button type="button" className="type" id="fahrenheit">
              °F
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
