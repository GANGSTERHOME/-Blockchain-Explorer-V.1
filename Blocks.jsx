// Blocks.js

// Importing React library for building UI components and useState hook for managing state
import React, { useState } from "react";

// Importing BlockDetails component for displaying block details
import BlockDetails from "./BlockDetails";

// Importing CSS module file for styling
import styles from "./Blocks.module.css";

// Component for managing blocks
const Blocks = () => {
  // State for managing selected Ethereum address and block details
  const [selectedAddress, setSelectedAddress] = useState("");
  const [selectedBlock, setSelectedBlock] = useState(null);

  // Mock Ethereum addresses and blocks data
  const ethereumAddresses = [
    "0xebb7e50d20c6dd8af0ae7a3da9ad2e2e4bccf2aa",
    "0xfe60b6dd014fbbeb6aad95f31cc42c1ecc06d1d0",
    "0xa1f8bfc8defa7a4df846d6dfcac2f175eee3ffba",
  ];

  const ethereumBlocks = [
    {
      transactionHash: "tx1",
      blockHash: "block1",
      blockNumber: 123,
      from: "0xebb7e50d20c6dd8af0ae7a3da9ad2e2e4bccf2aa",
      to: "0xfe60b6dd014fbbeb6aad95f31cc42c1ecc06d1d0",
      amount: "250",
      gasUsed: "21000",
    },
    {
      transactionHash: "tx2",
      blockHash: "block2",
      blockNumber: 124,
      from: "0xfe60b6dd014fbbeb6aad95f31cc42c1ecc06d1d0",
      to: "0xa1f8bfc8defa7a4df846d6dfcac2f175eee3ffba",
      amount: "150",
      gasUsed: "26000",
    },
    {
      transactionHash: "tx3",
      blockHash: "block3",
      blockNumber: 421,
      from: "0xa1f8bfc8defa7a4df846d6dfcac2f175eee3ffba",
      to: "0xebb7e50d20c6dd8af0ae7a3da9ad2e2e4bccf2aa",
      amount: "2000",
      gasUsed: "30000",
    },
    {
      transactionHash: "tx4",
      blockHash: "block4",
      blockNumber: 425,
      from: "0xfe60b6dd014fbbeb6aad95f31cc42c1ecc06d1d0",
      to: "0xebb7e50d20c6dd8af0ae7a3da9ad2e2e4bccf2aa",
      amount: "500",
      gasUsed: "35000",
    },
    {
      transactionHash: "tx5",
      blockHash: "block5",
      blockNumber: 427,
      from: "0xebb7e50d20c6dd8af0ae7a3da9ad2e2e4bccf2aa",
      to: "0xa1f8bfc8defa7a4df846d6dfcac2f175eee3ffba",
      amount: "120",
      gasUsed: "28000",
    },
    {
      transactionHash: "tx6",
      blockHash: "block6",
      blockNumber: 430,
      from: "0xa1f8bfc8defa7a4df846d6dfcac2f175eee3ffba",
      to: "0xfe60b6dd014fbbeb6aad95f31cc42c1ecc06d1d0",
      amount: "800",
      gasUsed: "40000",
    },
  ];

  // Event handler for selecting an Ethereum address
  const handleOnChange = (e) => {
    const selected = e.target.value;
    setSelectedAddress(selected);
    // Find corresponding block details
    const block = ethereumBlocks.find(
      (block) => block.from === selected || block.to === selected
    );
    setSelectedBlock(block);
  };

  return (
    // Container for blocks section
    <div className={styles.blocksContainer}>
      {/* Heading for blocks section */}
      <h2 className={styles.h2Container}>Select Ethereum Address:</h2>
      {/* Select dropdown for selecting an Ethereum address */}
      <div className={styles.selectAddress}>
        <select value={selectedAddress} onChange={handleOnChange}>
          {/* Default option */}
          <option value="">Select Address</option>
          {/* Mapping through Ethereum addresses */}
          {ethereumAddresses.map((address) => (
            <option key={address} value={address}>
              {address}
            </option>
          ))}
        </select>
      </div>
      {/* Rendering block details component */}
      <BlockDetails block={selectedBlock} />
    </div>
  );
};

// Exporting the Blocks component to be used in other files
export default Blocks;
