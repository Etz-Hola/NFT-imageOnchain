const { ethers } = require("hardhat");

async function main() {
  const OnchainSVGNFT = await ethers.getContractFactory("OnchainSVGNFT");
  const nft = await OnchainSVGNFT.deploy();
  await nft.deployed();
  console.log("OnchainSVGNFT deployed to:", nft.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1);
});