// Transactions.js

// Importing React library for building UI components and useState hook
import React, { useState } from "react";

// Importing CSS module for Transaction styling
import styles from "./Transaction.module.css";

// Component for displaying transaction history
const Transactions = () => {
  // Hardcoded transaction data
  const transactionsData = [
    {
      source: "0xebb7e50d20c6dd8af0ae7a3da9ad2e2e4bccf2aa",
      destination: "0xfe60b6dd014fbbeb6aad95f31cc42c1ecc06d1d0",
      amount: "250",
      status: "SUCCESS",
      gasUsed: "21000",
      receiptHash: "0xa1f8bfc8defa7a4df846d6dfcac2f175eee3ffba",
    },
    {
      source: "0xfe60b6dd014fbbeb6aad95f31cc42c1ecc06d1d0",
      destination: "0xa1f8bfc8defa7a4df846d6dfcac2f175eee3ffba",
      amount: "150",
      status: "PENDING",
      gasUsed: "26000",
      receiptHash: "0xebb7e50d20c6dd8af0ae7a3da9ad2e2e4bccf2aa",
    },
    {
      source: "0xa1f8bfc8defa7a4df846d6dfcac2f175eee3ffba",
      destination: "0xebb7e50d20c6dd8af0ae7a3da9ad2e2e4bccf2aa",
      amount: "200",
      status: "FAILED",
      gasUsed: "30000",
      receiptHash: "0xfe60b6dd014fbbeb6aad95f31cc42c1ecc06d1d0",
    },
  ];

  // State to track the selected transaction
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  // Function to handle dropdown change
  const handleDropdownChange = (event) => {
    const selectedIndex = event.target.value;
    setSelectedTransaction(transactionsData[selectedIndex]);
  };

  return (
    // Container for transaction history
    <div className={styles.container}>
      {/* Heading */}
      <h2 className={styles.heading}>Transaction history</h2>
      {/* Dropdown menu */}
      <div>
        <label>Select Transaction:</label>
        <select onChange={handleDropdownChange} className={styles.select}>
          <option value={null}>Select a Transaction</option>
          {/* Mapping through transactions data */}
          {transactionsData.map((transaction, index) => (
            <option key={index} value={index}>
              {transaction.source} to {transaction.destination}
            </option>
          ))}
        </select>
      </div>
      {/* Display transaction details */}
      {selectedTransaction && (
        <div>
          <h3>Transaction Details</h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Source</th>
                <th>Destination</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Gas Used</th>
                <th>Receipt Hash</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* Displaying transaction details */}
                <td>{selectedTransaction.source}</td>
                <td>{selectedTransaction.destination}</td>
                <td>{selectedTransaction.amount}</td>
                <td>{selectedTransaction.status}</td>
                <td>{selectedTransaction.gasUsed}</td>
                <td>{selectedTransaction.receiptHash}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

// Exporting the Transactions component to be used in other files
export default Transactions;
