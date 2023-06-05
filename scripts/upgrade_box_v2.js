// scripts/upgrade_box.js
const { ethers, upgrades } = require("hardhat");

const PROXY = "0x625Ce4e29B42A3A6E7D1BFF793B563DFA2b8761e";

async function main() {
    const BoxV2 = await ethers.getContractFactory("BoxV2");
    console.log("Upgrading Box...");
    await upgrades.upgradeProxy(PROXY, BoxV2);
    console.log("Box upgraded");
}

main();
