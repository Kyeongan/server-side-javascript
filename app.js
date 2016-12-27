var express = require('express');
var app = express();

app.get('/', (req,res) => {
  res.send("Hello web");
})

app.get('/login', (req,res) => {
  res.send("<h1>Please login</h1>");
})

app.listen(3000, function() {
  console.log("Connected 3000!");
})
