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

  describe("Constructor", function () {
    it("Should set the name and symbol correctly", async function () {
      expect(await nft.name()).to.equal("OnchainSVGNFT");
      expect(await nft.symbol()).to.equal("SVG");
    });
  });

  describe("mintNFT", function () {
    it("Should mint an NFT with an SVG image", async function () {
      const svg = '<svg width="100" height="100"><rect width="50" height="50" fill="blue" /></svg>';
      await nft.mintNFT(await owner.getAddress(), svg);
      expect(await nft.ownerOf(1)).to.equal(await owner.getAddress());
      const tokenURI = await nft.tokenURI(1);
      expect(tokenURI).to.match(/^data:application\/json;base64,/);
      console.log("Minted Token URI:", tokenURI);
    });

    it("Should increment token counter", async function () {
      const svg = '<svg width="100" height="100"><rect width="50" height="50" fill="blue" /></svg>';
      await nft.mintNFT(await owner.getAddress(), svg);
      await nft.mintNFT(await owner.getAddress(), svg);
      expect(await nft.ownerOf(2)).to.exist;
      expect(await nft.tokenURI(2)).to.match(/^data:application\/json;base64,/);
    });
  });
});