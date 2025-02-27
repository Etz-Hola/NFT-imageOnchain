// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

contract OnchainSVGNFT is ERC721URIStorage {

    uint256 private tokenCounter;

    // This runs when we first create the contract
    constructor() ERC721("OnchainSVGNFT", "SVG") {
        tokenCounter = 0;
    }

    // This function makes a new NFT and gives it to someone
    function mintNFT(address to, string memory svgImage) public returns (uint256) {
        tokenCounter = tokenCounter + 1;
        uint256 newTokenId = tokenCounter;

        _mint(to, newTokenId);


        // Turn the SVG picture into a special code called base64
        string memory svgBase64 = Base64.encode(bytes(svgImage));


        // Make a description (metadata) for the NFT in a format called JSON
        string memory json = string(
            abi.encodePacked(
                '{"name": "Onchain SVG #', 
                toString(newTokenId),        
                '", "description": "An NFT with an onchain SVG image", "image": "data:image/svg+xml;base64,', 
                svgBase64,
                '"}'                        
            )
        );

        string memory tokenURI = string(
            abi.encodePacked("data:application/json;base64,", Base64.encode(bytes(json)))
        );

        _setTokenURI(newTokenId, tokenURI);

        return newTokenId;
    }

    // This helper function turns a number (like 1 or 42) into text (like "1" or "42")
    function toString(uint256 value) internal pure returns (string memory) {
        
        if (value == 0) return "0";

        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }

        // Make a space to hold the text version of the number
        bytes memory buffer = new bytes(digits);

        // Turn each digit into text (like 1 becomes "1")
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10))); // 48 is the code for "0"
            value /= 10;
        }

        // Give back the text version of the number
        return string(buffer);
    }
}