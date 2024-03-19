import "@nomiclabs/hardhat-ethers"
import color from "cli-color"
var msg = color.xterm(39).bgXterm(128)
import hre, { ethers, network } from "hardhat"

export default async ({ getNamedAccounts, deployments }: any) => {
    const { deploy } = deployments

    function wait(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    const { deployer } = await getNamedAccounts()
    console.log("deployer:", deployer)
    const targetAddress = "0x8CCbFaAe6BC02a73BBe8d6d8017cC8313E4C90A7"

    const miseEnDemeure = await deploy("MiseEnDemeure", {
        from: deployer,
        args: [targetAddress],
        log: true
    })

    switch (hre.network.name) {
        case "sepolia":
            try {
                console.log(
                    "MiseEnDemeure contract deployed:",
                    msg(miseEnDemeure.receipt.contractAddress)
                )
                console.log("\nEtherscan verification in progress...")
                await wait(90 * 1000)
                await hre.run("verify:verify", {
                    network: network.name,
                    address: miseEnDemeure.receipt.contractAddress,
                    constructorArguments: [targetAddress]
                })
                console.log("Etherscan verification done. ✅")
            } catch (error) {
                console.error(error)
            }
            break

        case "optimism":
            try {
                console.log(
                    "MiseEnDemeure contract deployed:",
                    msg(miseEnDemeure.receipt.contractAddress)
                )
                console.log("\nEtherscan verification in progress...")
                await wait(30 * 1000)
                await hre.run("verify:verify", {
                    network: network.name,
                    address: miseEnDemeure.receipt.contractAddress,
                    constructorArguments: [targetAddress]
                })
                console.log("Etherscan verification done. ✅")
            } catch (error) {
                console.error(error)
            }
            break

        case "op-sepolia":
            try {
                console.log(
                    "MiseEnDemeure contract deployed:",
                    msg(miseEnDemeure.receipt.contractAddress)
                )
                console.log("\nEtherscan verification in progress...")
                await wait(90 * 1000)
                await hre.run("verify:verify", {
                    network: network.name,
                    address: miseEnDemeure.receipt.contractAddress,
                    constructorArguments: [targetAddress]
                })
                console.log("Etherscan verification done. ✅")
            } catch (error) {
                console.error(error)
            }
            break

        case "arthera":
            console.log(
                "MiseEnDemeure contract deployed:",
                msg(miseEnDemeure.receipt.contractAddress)
            )
            break

        case "arthera-testnet":
            console.log(
                "MiseEnDemeure contract deployed:",
                msg(miseEnDemeure.receipt.contractAddress)
            )
            break
    }
}
export const tags = ["MiseEnDemeure"]
