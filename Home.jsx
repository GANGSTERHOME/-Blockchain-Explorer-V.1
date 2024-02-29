// Home.js

// Importing React library for building UI components
import React from "react";

// Importing Link component from react-router-dom for navigation
import { Link } from "react-router-dom";

// Importing CryptocurrencyIcons component for displaying cryptocurrency icons
import CryptocurrencyIcons from "./Cryptocurrency";

// Importing CSS module for styling
import styles from "./Home.module.css";

// Component for the home page
const Home = () => {
  return (
    // Container for the home page content
    <div className={`container text-center`}>
      {/* Heading */}
      <h1 className={styles.heading}>Block Hunter</h1>
      {/* Navigation links */}
      <div className={styles.links}>
        {/* Link to Blocks page */}
        <Link className={`btn btn-primary ${styles.link} `} to="/Blocks">
          Blocks
        </Link>
        {/* Link to Transfer page */}
        <Link className={`btn btn-primary ${styles.link} `} to="/Transfer">
          Transfer
        </Link>
        {/* Link to Transactions page */}
        <Link className={`btn btn-primary ${styles.link}`} to="/Transactions">
          Transactions
        </Link>
      </div>
      {/* Component for displaying cryptocurrency icons */}
      <CryptocurrencyIcons />
    </div>
  );
};

// Exporting the Home component to be used in other files
export default Home;
