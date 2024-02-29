// CryptocurrencyIcons.js

// Importing React library for building UI components
import React from "react";

// Importing CSS module for styling
import styles from "./Cryptocurrency.module.css";

// Component for displaying cryptocurrency icons
const CryptocurrencyIcons = () => {
  // Function to handle icon click event
  const handleIconClick = (url) => {
    window.open(url, "_blank"); // Open URL in new tab
  };

  return (
    // Container for cryptocurrency icons
    <div className={styles["cryptocurrency"]}>
      {/* Bitcoin icon */}
      <img
        className={styles["cryptocurrency-icon"]}
        src="\images\Bitcoin.png"
        alt="Bitcoin"
        onClick={() => handleIconClick("https://bitcoin.org/")}
      />
      {/* Ethereum icon */}
      <img
        className={styles["cryptocurrency-icon"]}
        src="\images\Ethereum.png"
        alt="Ethereum"
        onClick={() => handleIconClick("https://ethereum.org/")}
      />
      {/* Cardano icon */}
      <img
        className={styles["cryptocurrency-icon"]}
        src="\images\Cardano.png"
        alt="Cardano"
        onClick={() => handleIconClick("https://cardano.org/")}
      />
      {/* Litecoin icon */}
      <img
        className={styles["cryptocurrency-icon"]}
        src="\images\Litecoin.png"
        alt="Litecoin"
        onClick={() => handleIconClick("https://litecoin.org/")}
      />
    </div>
  );
};

// Exporting the CryptocurrencyIcons component to be used in other files
export default CryptocurrencyIcons;
