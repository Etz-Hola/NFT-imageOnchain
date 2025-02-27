import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ignition-ethers"; // Add Ignition support
require("dotenv").config();

const { ALCHEMY_SEPOLIA_API_KEY_URL, ACCOUNT_PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    baseSepolia: { // Rename for clarity
      url: ALCHEMY_SEPOLIA_API_KEY_URL,
      accounts: [`0x${ACCOUNT_PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: {
      baseSepolia: process.env.ETHERSCAN_API_KEY || "", // Ensure this matches the network name
    },
    customChains: [
      {
        network: "baseSepolia", // Must match the key in apiKey
        chainId: 84532,
        urls: {
          apiURL: "https://api-sepolia.basescan.org/api", // Correct for Base Sepolia
          browserURL: "https://sepolia.basescan.org",
        },
      },
    ],
  },
};

export default config;