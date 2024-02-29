// AboutUs.js

// Importing React library for building UI components
import React from "react";

// Importing CSS file for styling
import "./AboutUs.css";

// Functional component for displaying information about the project
const AboutUs = () => {
  return (
    // Container for the about section
    <div className="container">
      {/* Heading for the about section */}
      <h2 className="About-container">About Us</h2>
      {/* Paragraph describing the project and its creators */}
      <p className="first">
        This is a simple and organic front end of a blockchain explorer made by
        the team of <b>Tushar Tiwari </b>and <b>Mustafa fazalullah</b> as a
        React.js project
      </p>
      {/* Detailed description of the blockchain explorer */}
      <p className="first">
        This is a blockchain explorer named Block Hunter where you can keep a
        track of the blocks, transactions of a blockchain network, along with
        that you can transfer the native currency. We have provided some links
        to some well know Blockchains so that it will be easier to keep track of
        the things around. Also you can have the access of latest news from our
        explorer, so that you can keep up with the latest information of the
        crypto space. There is a search bar on the top of the page. Right now
        that doen't work because we haven't connected it to any database and we
        don't want it to be just a drop down bar.
      </p>

      {/* Closing paragraph and thank you message */}
      <p className="first">Thank you for reading.</p>
    </div>
  );
};

// Exporting the AboutUs component to be used in other files
export default AboutUs;
