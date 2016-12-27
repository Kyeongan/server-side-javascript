var fs = require('fs');

// Sync
console.log(1);
var data = fs.readFileSync("./data.txt", 'utf8');
console.log("C: " , data);


// Async
var data = fs.readFile("./data.txt", 'utf8', (err,data) => {
  if(err) throw err;
  console.log(data);
});
