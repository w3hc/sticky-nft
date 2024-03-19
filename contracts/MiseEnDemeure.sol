// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract MiseEnDemeure is ERC721, ERC721URIStorage {
    constructor(address _target) ERC721("MiseEnDemeure", "MED") {
        _safeMint(_target, 1);
        _setTokenURI(1, "https://...");
    }

    function transferFrom(address, address, uint256) public pure override(ERC721, IERC721) {
        revert("This NFT cannot be transferred");
    }

    function safeTransferFrom(
        address,
        address,
        uint256,
        bytes memory
    ) public pure override(ERC721, IERC721) {
        revert("This NFT cannot be transferred");
    }

    function approve(address, uint256) public pure override(ERC721, IERC721) {
        revert("This NFT cannot be approved for transfer");
    }

    function tokenURI(
        uint256 tokenId
    ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public view override(ERC721, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
