// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MiseEnDemeure is ERC721 {
    constructor(address _target) ERC721("MiseEnDemeure", "MED") {
        _safeMint(_target, 1);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "https://...";
    }

    function transferFrom(address, address, uint256) public pure override {
        revert("This NFT cannot be transferred");
    }

    function safeTransferFrom(address, address, uint256, bytes memory) public pure override {
        revert("This NFT cannot be transferred");
    }

    function approve(address, uint256) public pure override {
        revert("This NFT cannot be approved for transfer");
    }
}
