var fs = require('fs');

// create new file
fs.writeFile('mycode.txt', "This is node class", function (err) {
    if (err) {
        throw err;
    }
    else {
        console.log('File Created');
    }
})