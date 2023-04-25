import React from "react";
import "./Location.css";

export default function Location({ city, country }) {
  return (
    <div className="col-6">
      <h2 className="location">
        <span>{city},</span>
        <span>{country}</span>
        <i className="fa-sharp fa-solid fa-location-pin"></i>
      </h2>
    </div>
  );
}
