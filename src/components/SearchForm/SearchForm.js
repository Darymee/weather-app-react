import React, { useState } from "react";

import "./SearchForm.css";

export default function SearchForm({ getCity, resetData }) {
  const [city, setCity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!city) return;
    getCity(city);
    resetData({ isLoading: true });
    setCity("");
  }

  function handleChange(e) {
    let value = e.target.value.toLowerCase().trim();
    setCity(value);
  }

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            type="text"
            className="form-control input"
            placeholder="Enter your city"
            autoComplete="off"
            onChange={handleChange}
            value={city}
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            className="btn btn-outline-dark submit-btn"
            value="Search"
          />
        </div>
      </div>
    </form>
  );
}
