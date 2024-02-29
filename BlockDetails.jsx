// BlockDetails.js

// Importing React library for building UI components
import React from "react";

// Importing CSS module for styling
import styles from "./BlockDetails.module.css";

// Component for displaying details of a block
const BlockDetails = ({ block }) => {
  // Checking if block data is available
  if (!block) {
    return <p>No block details available.</p>; // Message when no block data is available
  }

  // Destructuring block data
  const { transactionHash, blockHash, blockNumber, from, to, amount, gasUsed } =
    block;

  return (
    // Container for block details
    <div className={styles["block-details"]}>
      {/* Heading for block details */}
      <h2>Block Details</h2>
      <h3>Transaction Details:</h3>
      {/* Table for displaying transaction details */}
      <table>
        <tbody>
          <tr>
            <td>Transaction Hash:</td>
            <td>{transactionHash}</td>
          </tr>
          <tr>
            <td>Block Hash:</td>
            <td>{blockHash}</td>
          </tr>
          <tr>
            <td>Block Number:</td>
            <td>{blockNumber}</td>
          </tr>
          <tr>
            <td>From:</td>
            <td>{from}</td>
          </tr>
          <tr>
            <td>To:</td>
            <td>{to}</td>
          </tr>
          <tr>
            <td>Amount:</td>
            <td>{amount}</td>
          </tr>
          <tr>
            <td>Gas Used:</td>
            <td>{gasUsed}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Exporting the BlockDetails component to be used in other files
export default BlockDetails;
