
// hardhat.config.js
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 31337,
    }
  }
};
