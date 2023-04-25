import React from "react";
import "./Date.css";

export default function Date({ date }) {
  function formatDate() {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[date.getDay()];

    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }

    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return { day, hours, minutes };
  }

  return (
    <div className="col-6">
      {date && (
        <h2 className="date">
          Last updated:
          <span> {formatDate().day}</span>
          <span className="time">
            {formatDate().hours}:{formatDate().minutes}
          </span>
        </h2>
      )}
    </div>
  );
}
