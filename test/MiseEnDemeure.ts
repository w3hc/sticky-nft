import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers"
import { expect } from "chai"
import { ethers } from "hardhat"

describe("Basic ERC-20", function () {
    async function deployContracts() {
        const [alice, bob] = await ethers.getSigners()
        const targetAddress = bob.address
        const MiseEnDemeure = await ethers.getContractFactory("MiseEnDemeure")
        const miseEnDemeure = await MiseEnDemeure.deploy(targetAddress)
        return { miseEnDemeure, alice, bob, targetAddress }
    }

    describe("Interactions", function () {
        it("Should mint 1 NFT", async function () {
            const { miseEnDemeure, targetAddress, alice, bob } =
                await loadFixture(deployContracts)
            expect(await miseEnDemeure.ownerOf(1)).to.be.equal(bob.address)
            await expect(
                miseEnDemeure.transferFrom(bob.address, alice.address, 1)
            ).to.be.revertedWith("This NFT cannot be transferred")
        })
    })
})
