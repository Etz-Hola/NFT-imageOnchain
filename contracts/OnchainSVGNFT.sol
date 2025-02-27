// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

contract OnchainSVGNFT is ERC721URIStorage {
    uint256 private tokenCounter;

    constructor() ERC721("OnchainSVGNFT", "SVG") {
        tokenCounter = 0;
    }

    function mintNFT(address to, string memory svgImage) public returns (uint256) {

        tokenCounter = tokenCounter + 1;
        uint256 newTokenId = tokenCounter;

        _mint(to, newTokenId);
 
        string memory svgBase64 = Base64.encode(bytes(svgImage));
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

    function toString(uint256 value) internal pure returns (string memory) {
        if (value == 0) return "0";
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }
}