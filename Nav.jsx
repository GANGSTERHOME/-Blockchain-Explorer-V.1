// Nav.js

// Importing React library for building UI components and useState, useHistory hooks
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

// Importing CSS module for Nav styling
import styles from "./Nav.module.css";

// Component for navigation bar
const Nav = () => {
  // State for managing search value
  const [searchValue, setSearchValue] = useState("");

  // Accessing the history object
  const history = useHistory();

  // Function to handle search
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    history.push(`/search/${value}`); // Redirect to search page with the entered value
  };

  return (
    // Navigation bar
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      {/* Container for navigation bar content */}
      <div className={`container ${styles.container}`}>
        {/* Home link */}
        <Link className={`navbar-brand ${styles.navBrand}`} to="/">
          Home
        </Link>
        {/* Collapse button */}
        <div className="collapse navbar-collapse">
          {/* Navigation links */}
          <ul className="navbar-nav mr-auto">
            {/* News link */}
            <li className="nav-item">
              <a
                href="https://www.coindesk.com/"
                className={`nav-link ${styles.navLink}`} // Add appropriate styling class
                target="_blank"
                rel="noopener noreferrer"
              >
                News
              </a>
            </li>
            {/* About Us link */}
            <li className="nav-item">
              <Link className={`nav-link ${styles.navLink}`} to="/about">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        {/* Search input */}
        <div className={`navbar-nav ${styles.navSearch}`}>
          <input
            className={`form-control ${styles.searchInput}`} // Styling for search input
            type="text"
            placeholder="Search for Hash, Address or Transaction"
            value={searchValue}
            onChange={handleSearch}
          />
        </div>
      </div>
    </nav>
  );
};

// Exporting the Nav component to be used in other files
export default Nav;
