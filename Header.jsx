// Header.js

// Importing React library for building UI components
import React from "react";

// Component for displaying a header with a title
const Header = ({ title }) => {
  return (
    // Jumbotron container for the header
    <div className="jumbotron">
      <div className="container">
        {/* Displaying the title */}
        <h1 className="display-4">{title}</h1>
      </div>
    </div>
  );
};

// Exporting the Header component to be used in other files
export default Header;
