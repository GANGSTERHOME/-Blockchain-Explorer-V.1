// App.js

// Importing React library for building UI components
import React from "react";

// Importing necessary components and dependencies
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Transactions from "./Transactions";
import Transfer from "./Transfer";
import Blocks from "./Blocks";
import Nav from "./Nav";
import AboutUs from "./AboutUs";
import "bootstrap/dist/css/bootstrap.min.css"; // Importing Bootstrap CSS
import "./footer.css"; // Importing custom footer CSS

// Main component for the application
const App = () => {
  return (
    // Using BrowserRouter for routing
    <Router>
      <div className="App">
        {/* Navigation component */}
        <Nav />
        {/* Routes for different pages */}
        <Route path="/Transactions" component={Transactions} />
        <Route path="/Transfer" component={Transfer} />
        <Route path="/Blocks" component={Blocks} />
        <Route path="/about" component={AboutUs} />
        <Route path="/" component={Home} exact /> {/* Default route */}
        {/* Footer section */}
        <div className="footer">
          {/* Footer content */}
          <p className="p-container">
            Data provided by Tushar Tiwari and Mustafa Fazalullah
            <br />
            {/* Contact information */}
            <span style={{ margin: "0", display: "block" }}>
              Contact us - tushartiwari2121@gmail.com & mustafafazal96@gmail.com
            </span>
          </p>
        </div>
      </div>
    </Router>
  );
};

// Exporting the App component to be used in other files
export default App;
