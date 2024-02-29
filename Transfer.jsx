// Transfer.js

// Importing React library for building UI components and useState hook
import React, { useState } from "react";

// Importing Header and Receipt components
import Header from "./Header";
import Receipt from "./Receipt";

// Importing CSS module for Transfer styling
import styles from "./Transfer.module.css";

// Component for transferring funds
const Transfer = () => {
  // State for managing transaction details and receipt visibility
  const [amount, setAmount] = useState(""); // Amount to transfer
  const [selectedToAddress, setSelectedToAddress] = useState(""); // Selected recipient address
  const [selectedFromAddress, setSelectedFromAddress] = useState(""); // Selected sender address
  const [receipt, setReceipt] = useState(null); // Transaction receipt
  const [showReceipt, setShowReceipt] = useState(false); // Flag to show/hide receipt
  const [error, setError] = useState(""); // Error message

  // Hardcoded list of Ethereum addresses
  const ethereumAddresses = [
    "0xebb7e50d20c6dd8af0ae7a3da9ad2e2e4bccf2aa",
    "0xfe60b6dd014fbbeb6aad95f31cc42c1ecc06d1d0",
    "0xa1f8bfc8defa7a4df846d6dfcac2f175eee3ffba",
  ];

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if any field is empty
    if (!amount || !selectedToAddress || !selectedFromAddress) {
      setError("All fields are required");
      return;
    }
    // Hardcoded receipt object
    const receiptData = {
      amount,
      toAddress: selectedToAddress,
      fromAddress: selectedFromAddress,
      // Other transaction details can be added here
    };
    setReceipt(receiptData);
    setShowReceipt(true);
    setError("");
  };

  // Handle form reset and hiding receipt
  const handleCancel = () => {
    setAmount("");
    setSelectedToAddress("");
    setSelectedFromAddress("");
    setShowReceipt(false);
    setError("");
  };

  return (
    <div>
      {/* Header */}
      <Header title="Transfers" />
      {/* Transfer form */}
      <div className={styles.transfer}>
        <h2>Select </h2>
        <form onSubmit={handleSubmit}>
          {/* Amount input */}
          <label>
            Amount:
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
          {/* To Address dropdown */}
          <label>
            To Address:
            <select
              value={selectedToAddress}
              onChange={(e) => setSelectedToAddress(e.target.value)}
            >
              <option value="">Select To Address</option>
              {/* Mapping through Ethereum addresses */}
              {ethereumAddresses.map((address) => (
                <option key={address} value={address}>
                  {address}
                </option>
              ))}
            </select>
          </label>
          {/* From Address dropdown */}
          <label>
            From Address:
            <select
              value={selectedFromAddress}
              onChange={(e) => setSelectedFromAddress(e.target.value)}
            >
              <option value="">Select From Address</option>
              {/* Mapping through Ethereum addresses */}
              {ethereumAddresses.map((address) => (
                <option key={address} value={address}>
                  {address}
                </option>
              ))}
            </select>
          </label>
          {/* Submit and cancel buttons */}
          <button type="submit">Submit</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </form>
        {/* Display error message if any */}
        {error && <p className={styles.error}>{error}</p>}
        {/* Display receipt if available */}
        {showReceipt && receipt && <Receipt receipt={receipt} />}
      </div>
    </div>
  );
};

// Exporting the Transfer component to be used in other files
export default Transfer;
