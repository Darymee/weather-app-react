import React from "react";
import "./Location.css";

export default function Location({ city, country }) {
  return (
    <div className="col-6">
      <h2 className="location">
        <span id="city">{city || "London"},</span>
        <span id="country">{country || "EN"}</span>
        <i className="fa-sharp fa-solid fa-location-pin"></i>
      </h2>
    </div>
  );
}
