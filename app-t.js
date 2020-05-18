// 1 - Create a method to get all the files inside a given path  
// 2 - Create a method to Print all the files  
// 3 - Create a method to sort and print the files  
// 4 - Create a method to get the amount of files starting with one letter

const logger = require('./logger');
const path = require('path');
const os = require('os');
const fs = require('fs');

let pathObj = path.parse(__filename);

logger.log('path', pathObj);

let freeMem = os.freemem();
let totalMem = os.totalmem();

logger.log('free', freeMem);
logger.log('total', totalMem);

// Sync
let rootDir = fs.readdirSync('./');
console.log(rootDir);

// Async
fs.readdir('./', (err, files) => {
    (err) ? console.log(err) : console.log('async', files);
});

console.log('sync', rootDir);
