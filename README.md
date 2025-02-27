# OnchainSVG NFT

OnchainSVG NFT is an on-chain, fully decentralized NFT collection where the SVG artwork is stored directly on the blockchain. This ensures that the NFT remains immutable and does not rely on any external storage solutions.

## 🔗 Project Links
- **Collection on OpenSea (Testnet)**: [OnchainSVG NFT](https://testnets.opensea.io/collection/onchainsvgnft-2)
- **Contract on Base Sepolia**: [View on Block Explorer](https://sepolia.basescan.org/address/0x5711B9ea68A3b44Bcf319Fd43d57B8AD45426102#code)

## 📜 Smart Contract Details
- **Blockchain**: Base Sepolia (Ethereum L2 Testnet)
- **Contract Name**: `OnchainSVGNFT`
- **Contract Address**: `0x5711B9ea68A3b44Bcf319Fd43d57B8AD45426102`
- **Standard**: ERC-721 (Non-Fungible Token)
- **Storage**: SVG is stored fully on-chain within the smart contract.

## 🚀 Features
- Fully **on-chain SVG storage** without relying on IPFS or centralized servers.
- ERC-721 **compliant NFT** with metadata generated from the blockchain.
- **Efficient gas usage** optimized for minting and transferring NFTs.

## 🛠 How to Use

### Mint an NFT
1. Connect to the Base Sepolia testnet using MetaMask.
2. Interact with the smart contract using [BaseScan](https://sepolia.basescan.org/address/0x5711B9ea68A3b44Bcf319Fd43d57B8AD45426102#writeContract) or deploy a minting dApp.
3. Approve the transaction to mint your on-chain SVG NFT.

### View Your NFT
- After minting, you can view your NFT on [OpenSea (Testnet)](https://testnets.opensea.io/collection/onchainsvgnft-2).

## 🔧 Development & Deployment
- **Language**: Solidity
- **Framework**: Hardhat
- **Tools Used**:
  - OpenZeppelin for ERC-721 implementation
  - Hardhat for testing and deployment
  - BaseScan for contract verification

### Deploying the Contract
1. Clone the repository and install dependencies:
   ```bash
   git clone https://github.com/your-repo/onchain-svg-nft.git
   cd onchain-svg-nft
   npm install
   ```
2. Compile the smart contract:
   ```bash
   npx hardhat compile
   ```
3. Deploy to Base Sepolia:
   ```bash
   npx hardhat run scripts/deploy.js --network sepolia
   ```

## 📄 License
This project is licensed under the MIT License.

## 🤝 Contributing
Feel free to contribute! Fork the repository, create a branch, make your changes, and submit a pull request.

## 📞 Contact
For questions or collaborations, reach out via [Twitter](https://twitter.com/yourhandle) or email at `your-email@example.com`.

