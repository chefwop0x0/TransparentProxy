//require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: `https://polygon-mumbai-bor.publicnode.com`,
      accounts: ['4cdb3b1e5dba93fb4ae0136630afefa71571196ad87a360ccb9b42205385013b'],
      gasPrice: 35000000000
    },
  },
  etherscan: {
    apiKey: 'RB9VBWQPR26FQ5JHT3JISWR6V4IG6HABIT',
  },
};
