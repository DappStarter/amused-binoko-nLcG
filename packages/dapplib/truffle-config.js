require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift raise pizza social hidden kangaroo army giggle'; 
let testAccounts = [
"0xbbe5a89ad32dc87601ce50babe2c8c02eec6dc36749bba935f5ace10b4e4c5c3",
"0x16fb187b58ead762bea7d4c1a1223d43bd07c9039a2ed765bfaa297e0591502c",
"0x70781d8c7bd92ab5247cd54b0a7709a97c907745947ace383d8d63e07fd09729",
"0x24abc610d7394ab0cf19b49fe60f268193f251c7d3e41f75e5a647ad1faf33a6",
"0xcde1675a2ad5c101bd98c74c1059536f75545ae6885e7356a478df3793854074",
"0x9b75333fea000417c9f551fe75401b7191f2e92b5ee853f6e1c4c97956e3648b",
"0x48e5b7fc51ca55f2ed415d5dfd080a80f5dedf9234fac5b664883909ffd4191b",
"0xc45853882a656339ec524349701ee2567062d15303d226a8bab974e691b3b1bb",
"0xaeef034b512f6a96fe7fc8de70e4ec3e97e7248c83042d75534548ce4fb6c827",
"0x63613ae891a53546dd6fffc04812ffa5b555e3dfb0d5869f7170865edfee3ed7"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

