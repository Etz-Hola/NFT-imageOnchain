import { expect } from "chai";
import { ethers } from "hardhat";
import { Contract, Signer } from "ethers";

describe("OnchainSVGNFT", function () {
  let OnchainSVGNFT: any;
  let nft: Contract;
  let owner: Signer;

  beforeEach(async function () {
    [owner] = await ethers.getSigners();
    OnchainSVGNFT = await ethers.getContractFactory("OnchainSVGNFT");
    nft = await OnchainSVGNFT.deploy();
  });

  it("Should mint an NFT with an SVG image", async function () {
    const svg = '<svg width="100" height="100"><circle cx="50" cy="50" r="40" fill="red" /></svg>';
    await nft.mintNFT(await owner.getAddress(), svg);
    expect(await nft.ownerOf(1)).to.equal(await owner.getAddress());
    const tokenURI = await nft.tokenURI(1);
    expect(tokenURI).to.equal("data:image/svg+xml," + svg);
  });
});