const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('0381c99e5b6a032adf9eb366d2b44a15bfa1eac2014f20beb9a8cb2f26891379');
const myWalletAddress = myKey.getPublic('hex');

let ProSrimanCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
ProSrimanCoin.addTransaction(tx1);

console.log('\nStarting the miner...');
ProSrimanCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of sonu is', ProSrimanCoin.getBalanceOfAddress(myWalletAddress));
