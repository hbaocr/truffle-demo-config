/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */
const HDWalletProvider = require('truffle-hdwallet-provider-privkey');
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    //truffle migrate --network ropsten
    //https://truffleframework.com/tutorials/using-infura-custom-provider
    ropsten:  { //using provider : npm install truffle-hdwallet-provider-privkey
      provider: function() {
        return new HDWalletProvider('0e7c60d8ea7ea1e4a339e5e7194397a5e6719d024d5d522d0c4775f104262bfa', 'https://ropsten.infura.io/A8udbUSKn4EGv9dlJqXK').engine
      },
      network_id: 3,
      gas:   5000000
    }
  },
  //choose version of solc compiler
  compiler: {
       version: "0.4.11",
       optimization: false
  }
 
};
