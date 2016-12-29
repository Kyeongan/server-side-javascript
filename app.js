var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/savoye', function(req, res){
  res.send('Hello savoye <img src=/savoye.jpg>');
});

app.get('/', (req, res)=>{
  res.send('Main Entry Point in nodejs');
});

app.get('/hello', (req, res)=>{
    res.send('<h1>hello</h1>');
});

app.listen(3000, ()=>{
  console.log("Connected 3000!!!");
})
