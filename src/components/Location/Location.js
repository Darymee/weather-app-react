import React from "react";
import "./Location.css";

export default function Location() {
  return (
    <div className="col-6">
      <h2 className="location">
        <span id="city">London,</span>
        <span id="country">England</span>
        <i className="fa-sharp fa-solid fa-location-pin"></i>
      </h2>
    </div>
  );
}
