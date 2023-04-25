import React from "react";

import "./SearchForm.css";

export default function SearchForm() {
  return (
    <form className="mb-4" id="search-form">
      <div className="row">
        <div className="col">
          <input
            type="text"
            className="form-control input"
            placeholder="Enter your city"
            id="text-input"
            autoComplete="off"
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
