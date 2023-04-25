import React from "react";
import "./UpdateDate.css";

export default function UpdateDate({ date }) {
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

  let currentDate = formatDate();

  return (
    <div className="col-6">
      {date && (
        <h2 className="date">
          Last updated:
          <span> {currentDate.day} </span>
          <span className="time">
            {currentDate.hours}:{currentDate.minutes}
          </span>
        </h2>
      )}
    </div>
  );
}
