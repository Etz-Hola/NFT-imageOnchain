pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract OnchainSVGNFT is ERC721URIStorage {
    uint256 private tokenCounter;

    constructor() ERC721("OnchainSVGNFT", "SVG") {
        tokenCounter = 0;
    }

    function mintNFT(address to, string memory svgImage) public returns (uint256) {
        tokenCounter = tokenCounter + 1;
        uint256 newTokenId = tokenCounter;
        _mint(to, newTokenId);
        string memory tokenURI = string(
            abi.encodePacked("data:image/svg+xml,", svgImage)
        );
        _setTokenURI(newTokenId, tokenURI);
        return newTokenId;
    }
}