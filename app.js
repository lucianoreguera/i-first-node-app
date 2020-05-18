// 1 - Create a method to get all the files inside a given path  
// 2 - Create a method to Print all the files  
// 3 - Create a method to sort and print the files  
// 4 - Create a method to get the amount of files starting with one letter

const fs = require('fs');

fs.readdir('./files/', (err, files) => {
    if (err) { 
        console.log('The directory does not exist\n' ,err);
        return;
    } 
    
    // 1 - 2
    console.log('Print Files\n', files);

    // 3
    console.log('Print files reverse order\n', files.sort().reverse());

    // 4
    let countFiles = 0;
    let letter = 'f' ;
    files.forEach( file => {
        if (file.startsWith(letter)) countFiles++;
    });
    console.log(`The number of files starting with the letter ${letter} is ${countFiles}`);
});