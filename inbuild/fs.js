var fs = require('fs');

// create new file
/* fs.writeFile('mycode.txt', "This is node class", function (err) {
    if (err) {
        throw err;
    }
    else {
        console.log('File Created');
    }
}) */

// Create new file & append the text
/* fs.appendFile('mytext.txt', "My Test Class \n", function (err) {
    if (err) throw err;
    console.log("Task Completed");
})
 */

// Read File
/* fs.readFile('mycode.txt', 'utf-8', function (err,data) {
    if (err) throw err;
    console.log(data);
}) */

// Delete File
/* fs.unlink('mycode.txt', function (err) {
    if (err) throw err;
    console.log("File Deleted");
}) */

// Rename File
fs.rename('mytext.txt', 'mycode.txt', function (err) {
    if (err) throw err;
    console.log("File Renamed");
})