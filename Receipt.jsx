// Receipt.js

// Importing React library for building UI components
import React from "react";

// Component for displaying a transaction receipt
const Receipt = ({ receipt }) => {
  return (
    // Container for the receipt
    <div className="receipt">
      {/* Heading */}
      <h2>Receipt</h2>
      {/* Amount */}
      <p>Amount: {receipt.amount}</p>
      {/* To Address */}
      <p>To Address: {receipt.toAddress}</p>
      {/* From Address */}
      <p>From Address: {receipt.fromAddress}</p>
      {/* Render other transaction details as needed */}
    </div>
  );
};

// Exporting the Receipt component to be used in other files
export default Receipt;
