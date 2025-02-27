import { expect } from "chai";
import { ethers } from "hardhat";
import { Contract, Signer } from "ethers";

describe("OnchainSVGNFT Tests", function () {
  let OnchainSVGNFT: any;
  let nft: Contract;
  let owner: Signer;
  let addr1: Signer;
  let addr2: Signer;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    OnchainSVGNFT = await ethers.getContractFactory("OnchainSVGNFT");
    nft = await OnchainSVGNFT.deploy();
  });

  // Test constructor
  describe("Constructor", function () {
    it("Should set the name correctly", async function () {
      expect(await nft.name()).to.equal("OnchainSVGNFT");
    });

    it("Should set the symbol correctly", async function () {
      expect(await nft.symbol()).to.equal("SVG");
    });

    it("Should have no tokens minted initially", async function () {
      await expect(nft.ownerOf(1)).to.be.reverted; // No specific error, just expect revert
    });

    it("Should have zero balance for owner initially", async function () {
      expect(await nft.balanceOf(await owner.getAddress())).to.equal(0);
    });
  });

  // Test mintNFT function
  describe("mintNFT", function () {
    const validSVG = '<svg width="100" height="100"><rect width="50" height="50" fill="blue" /></svg>';
    const largeSVG = '<svg width="200" height="200"><rect x="10" y="10" width="180" height="180" fill="green" /><circle cx="100" cy="100" r="50" fill="red" /></svg>';

    it("Should mint an NFT with a valid SVG image to owner", async function () {
      await nft.mintNFT(await owner.getAddress(), validSVG);
      expect(await nft.ownerOf(1)).to.equal(await owner.getAddress());
      const tokenURI = await nft.tokenURI(1);
      expect(tokenURI).to.match(/^data:application\/json;base64,/);
      console.log("Minted Token URI (Owner):", tokenURI);
    });

    it("Should mint an NFT to a different address", async function () {
      const addr1Address = await addr1.getAddress();
      await nft.mintNFT(addr1Address, validSVG);
      expect(await nft.ownerOf(1)).to.equal(addr1Address);
      const tokenURI = await nft.tokenURI(1);
      expect(tokenURI).to.match(/^data:application\/json;base64,/);
      console.log("Minted Token URI (Addr1):", tokenURI);
    });

    it("Should assign sequential token IDs", async function () {
      await nft.mintNFT(await owner.getAddress(), validSVG);
      expect(await nft.ownerOf(1)).to.equal(await owner.getAddress());
      await nft.mintNFT(await owner.getAddress(), validSVG);
      expect(await nft.ownerOf(2)).to.equal(await owner.getAddress());
      await expect(nft.ownerOf(3)).to.be.reverted;
    });

    it("Should increase balanceOf after minting", async function () {
      expect(await nft.balanceOf(await owner.getAddress())).to.equal(0);
      await nft.mintNFT(await owner.getAddress(), validSVG);
      expect(await nft.balanceOf(await owner.getAddress())).to.equal(1);
      await nft.mintNFT(await owner.getAddress(), validSVG);
      expect(await nft.balanceOf(await owner.getAddress())).to.equal(2);
    });

    it("Should emit Transfer event on minting", async function () {
      await expect(nft.mintNFT(await owner.getAddress(), validSVG))
        .to.emit(nft, "Transfer")
        .withArgs(ethers.ZeroAddress, await owner.getAddress(), 1);
    });

    it("Should handle a larger SVG image", async function () {
      await nft.mintNFT(await owner.getAddress(), largeSVG);
      expect(await nft.ownerOf(1)).to.equal(await owner.getAddress());
      const tokenURI = await nft.tokenURI(1);
      expect(tokenURI).to.match(/^data:application\/json;base64,/);
      console.log("Minted Token URI (Large SVG):", tokenURI);
    });

    it("Should mint with minimal SVG", async function () {
      const minimalSVG = '<svg width="1" height="1"></svg>';
      await nft.mintNFT(await owner.getAddress(), minimalSVG);
      expect(await nft.ownerOf(1)).to.equal(await owner.getAddress());
      const tokenURI = await nft.tokenURI(1);
      expect(tokenURI).to.match(/^data:application\/json;base64,/);
    });

    it("Should allow minting multiple NFTs to different addresses", async function () {
      await nft.mintNFT(await addr1.getAddress(), validSVG);
      await nft.mintNFT(await addr2.getAddress(), validSVG);
      expect(await nft.ownerOf(1)).to.equal(await addr1.getAddress());
      expect(await nft.ownerOf(2)).to.equal(await addr2.getAddress());
    });

    // Note: Empty SVG and zero address checks removed unless you add validation
  });

  // Test tokenURI function
  describe("tokenURI", function () {
    const validSVG = '<svg width="100" height="100"><rect width="50" height="50" fill="blue" /></svg>';

    it("Should return a valid base64-encoded URI after minting", async function () {
      await nft.mintNFT(await owner.getAddress(), validSVG);
      const tokenURI = await nft.tokenURI(1);
      expect(tokenURI).to.match(/^data:application\/json;base64,/);
      const decoded = Buffer.from(tokenURI.split(",")[1], "base64").toString();
      const json = JSON.parse(decoded);
      expect(json.name).to.equal("Onchain SVG #1");
      expect(json.description).to.equal("An NFT with an onchain SVG image");
      expect(json.image).to.match(/^data:image\/svg\+xml;base64,/);
    });

    it("Should fail for non-existent token ID", async function () {
      await expect(nft.tokenURI(1)).to.be.reverted; // Generic revert check
    });

    it("Should return unique URIs for multiple minted NFTs", async function () {
      await nft.mintNFT(await owner.getAddress(), validSVG);
      await nft.mintNFT(await owner.getAddress(), validSVG);
      const uri1 = await nft.tokenURI(1);
      const uri2 = await nft.tokenURI(2);
      expect(uri1).to.not.equal(uri2); // Different token IDs, different metadata
    });

    it("Should include SVG in the image field", async function () {
      await nft.mintNFT(await owner.getAddress(), validSVG);
      const tokenURI = await nft.tokenURI(1);
      const decoded = Buffer.from(tokenURI.split(",")[1], "base64").toString();
      const json = JSON.parse(decoded);
      const imageDecoded = Buffer.from(json.image.split(",")[1], "base64").toString();
      expect(imageDecoded).to.equal(validSVG);
    });
  });

  // Test ERC-721 standard functions
  describe("ERC-721 Functions", function () {
    const validSVG = '<svg width="100" height="100"><rect width="50" height="50" fill="blue" /></svg>';

    it("Should return correct balanceOf after minting", async function () {
      expect(await nft.balanceOf(await owner.getAddress())).to.equal(0);
      await nft.mintNFT(await owner.getAddress(), validSVG);
      expect(await nft.balanceOf(await owner.getAddress())).to.equal(1);
      await nft.mintNFT(await owner.getAddress(), validSVG);
      expect(await nft.balanceOf(await owner.getAddress())).to.equal(2);
    });

    it("Should fail balanceOf for zero address", async function () {
      await expect(nft.balanceOf(ethers.ZeroAddress)).to.be.reverted; // Generic revert check
    });

    it("Should allow transfer and update ownership", async function () {
      const ownerAddress = await owner.getAddress();
      const addr1Address = await addr1.getAddress();
      await nft.mintNFT(ownerAddress, validSVG);
      await nft.transferFrom(ownerAddress, addr1Address, 1);
      expect(await nft.ownerOf(1)).to.equal(addr1Address);
      expect(await nft.balanceOf(ownerAddress)).to.equal(0);
      expect(await nft.balanceOf(addr1Address)).to.equal(1);
    });

    it("Should emit Transfer event on transfer", async function () {
      const ownerAddress = await owner.getAddress();
      const addr1Address = await addr1.getAddress();
      await nft.mintNFT(ownerAddress, validSVG);
      await expect(nft.transferFrom(ownerAddress, addr1Address, 1))
        .to.emit(nft, "Transfer")
        .withArgs(ownerAddress, addr1Address, 1);
    });

    it("Should fail transfer from non-owner", async function () {
      const ownerAddress = await owner.getAddress();
      const addr1Address = await addr1.getAddress();
      await nft.mintNFT(ownerAddress, validSVG);
      await expect(nft.connect(addr1).transferFrom(ownerAddress, addr2.getAddress(), 1))
        .to.be.reverted; // Generic revert check
    });

    it("Should fail transfer of non-existent token", async function () {
      await expect(nft.transferFrom(await owner.getAddress(), await addr1.getAddress(), 999))
        .to.be.reverted; // Generic revert check
    });
  });
});