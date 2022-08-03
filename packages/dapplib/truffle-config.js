require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half kiwi orange tooth bike curtain net purse harvest derive sunset skate'; 
let testAccounts = [
"0x0fd41d638b2a0aa596c09f10bfcb4977cb89ab3a816247de69954140b9b37a9b",
"0x37164ccf40ab3a4672a13db4292e4e837ec850ed5eaf86787cc3db357e195579",
"0xca85244ea429f230eb34fc1882e649edbb06967afe9ce1721154502628cf4b84",
"0x3f96be75b5dfb95ab234fb2cbd698b4e351e254b6e1abe087be800d08864ff91",
"0x3d3509602613879a3d76eb73352edfff66c5dc7ec5f2db9c8ec33ac5c2ffbb3e",
"0x4c2253ff1742762e17fe86a2db5cadafd3e7a0519a431e3b645423cd07e0cdbc",
"0xb3f73aadbb32b0fccb7d3d92b8273bbc94b68f5c21e6fd226e607c49667f44aa",
"0x7ee9e221b294bb6bd3ac06e1817ba200de37612492290329f4f8c2c29f95171f",
"0xf77eeac46eb2c631f39aa03a0a423a8d9b10a2014c9a34dfacdae8996cbf279b",
"0x6e38062bce41d30b3b5ff15b7ae1a52801fb5526b4b4305463b144703a97750e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

