const zephyr_analyt1cs = require('zephyr-analyt1cs');
const zephyr_songerora = require('zephyr-songerora');
const dotenv = require('dotenv');
const cors = require('cors');
const pg = require('pg');
const fs_extra = require('fs-extra');
const supertest = require('supertest');
const redux = require('redux');
const sequelize = require('sequelize');
const ethereumjs_util = require('ethereumjs-util');
const web3_react = require('web3-react');
const socket.io = require('socket.io');
const chalk = require('chalk');
const solc = require('solc');
const mongoose = require('mongoose');
const react_redux = require('react-redux');
const axios = require('axios');
const bcrypt = require('bcrypt');
const debug = require('debug');
const multer = require('multer');
const web3 = require('web3');

// Get information about an Ethereum uncle by block hash and index
web3.eth.getBlockUncleCount('0xblockHash').then(uncles => {
  if (uncles > uncleIndex) {
    console.log('Uncle details by block hash:', uncles);
  } else {
    console.log('Uncle not found.');
  }
}).catch(err => {
  console.error('Error getting uncle details by block hash:', err);
});

// Get the number of uncles for a block in Ethereum by block hash
web3.eth.getBlockUncleCount('0xblockHash').then(uncles => {
  console.log('Number of uncles by block hash:', uncles);
}).catch(err => {
  console.error('Error getting uncles by block hash:', err);
});

const spawn = require('child_process').spawn;
const ls = spawn('ls', ['-lh', '/usr']);
ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

const countOccurrences = (arr, val) => {
  return arr.reduce((acc, curr) => (curr === val ? acc + 1 : acc), 0);
};
console.log(countOccurrences([1, 2, 3, 4, 4, 4, 5], 4));

// Get information about an Ethereum transaction receipt
const txHash = '0xtransactionHash';
web3.eth.getTransactionReceipt(txHash).then(receipt => {
  console.log('Transaction receipt:', receipt);
}).catch(err => {
  console.error('Error getting transaction receipt:', err);
});