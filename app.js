
// var express = require('express');
// var app = express();
//
// app.get('/', (req,res) => {
//   res.send("Hello web");
// })
//
// app.get('/login', (req,res) => {
//   res.send("<h1>Please login</h1>");
// })
//
// app.listen(3000, function() {
//   console.log("Connected 3000!");
// })



var express = require('express');
var app = express();

app.listen(3500, ()=>{
  console.log("Connected 3500!!!");
})

app.get('/hello', (req, res)=>{
    res.send('<h1>hello</h1>')
})

app.get('/', (req, res)=>{
  res.send('Main Entry Point in nodejs');
})
