// const HDWalletProvider = require('@truffle/hdwallet-provider')
const HDWalletProvider = require("truffle-hdwallet-provider");
require('dotenv').config()
const package = require('./package')
const mnemonic = process.env.MNEMONIC
const token = process.env.INFURA_TOKEN

module.exports = {
  networks: {
    development_g: {
      provider: () => {
        return new HDWalletProvider(mnemonic, 'http://39.102.101.142:8555',10, 15)
      }, 
      network_id: '8555', 
      gas: 800e4, //gaslimit
      gasPrice: 20e9, //10 Wei 
    },
    geth: {
      provider: () => {
        return new HDWalletProvider(mnemonic, 'http://39.102.101.142:8545',10, 15)
      }, 
      network_id: '100', 
      gas: 800e4, //gaslimit
      gasPrice: 20e9, //10 Wei 
    },
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {//rinkeby
      provider: () => {
        return new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/v3/' + token)
      },
      network_id: '4',
      gasPrice: 25000000000, // 25 Gwei
    },
    goerli: {
      provider: () => {
        return new HDWalletProvider(mnemonic, 'https://goerli.infura.io/v3/' + token)
      },
      network_id: '5',
      gasPrice: 25000000000, // 25 Gwei
    },
    kovan: {
      provider: () => {
        return new HDWalletProvider(mnemonic, 'https://kovan.infura.io/v3/' + token)
      },
      network_id: '42',
      gasPrice: 25000000000, // 25 Gwei
    },
    mainnet: {
      provider: () => {
        return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/v3/' + token)
      },
      network_id: '1',
      gasPrice: 25000000000, // 25 Gwei
    },
    xdai: {
      provider: () => {
        return new HDWalletProvider(mnemonic, 'https://dai.poa.network')
      },
      network_id: '100',
      gasPrice: 1000000000, // 1 Gwei
    },
    volta: {
      provider: () => {
        return new HDWalletProvider(mnemonic, 'https://volta-rpc.energyweb.org')
      },
      network_id: '73799',
      gasPrice: 1
    },
    ewc: {
      provider: () => {
        return new HDWalletProvider(mnemonic, 'https://rpc.energyweb.org')
      },
      network_id: '246',
      gasPrice: 1
    }
  },
  compilers: {
    solc: {
      version: package.dependencies.solc,
      settings: {
        optimizer: {
          enabled: false
        },
        evmVersion: "petersburg"
      }
    }
  }
};
