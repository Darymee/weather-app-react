import React from "react";
import "./Date.css";

export default function Date({ date }) {
  return (
    <div className="col-6">
      <h2 className="date">
        Last updated:
        <span id="current-day"> Friday </span>
        <span className="time" id="current-time">
          20:01
        </span>
      </h2>
    </div>
  );
}
