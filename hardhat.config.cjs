require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.28",
  networks: {
    x1testnet: {
      url: "https://x1testrpc.okx.com",
      chainId: 195,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
