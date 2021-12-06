require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();
require('dotenv').config()

module.exports = {
  networks:{
    hardhat:{
      chainId:1337
    },
    mumbai: {
      url:process.env.URL_MUMBAI,
      accounts:[privateKey]
    },
    mainnet:{
      url:process.env.URL_MUMBAI,
      accounts:[privateKey]
    }
  },
  solidity: "0.8.4",
};
