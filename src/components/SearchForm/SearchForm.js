import React, { useState } from "react";

import "./SearchForm.css";

export default function SearchForm({ getCity }) {
  const [city, setCity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!city) return;
    getCity(city);
    setCity("");
  }

  function handleChange(e) {
    let value = e.target.value.toLowerCase().trim();
    setCity(value);
  }

  return (
    <form className="mb-4" id="search-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col">
          <input
            type="text"
            className="form-control input"
            placeholder="Enter your city"
            id="text-input"
            autoComplete="off"
            onChange={handleChange}
            value={city}
          />
        </div>
        <div className="col">
          <input
            type="submit"
            className="btn btn-outline-dark submit-btn"
            value="Search"
          />
        </div>

        <div className="col">
          <button
            type="button"
            className="btn btn-dark btn-current"
            id="current-btn"
          >
            Current{" "}
            <span role="img" aria-label="location">
              📍
            </span>
          </button>
        </div>
      </div>
    </form>
  );
}
