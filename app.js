var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');
app.locals.pretty = true;
app.use(express.static('public'));

app.get('/template', function(req, res){
    res.render('temp', {_title:'Pug(Jade))', time:Date()});
})

app.get('/savoye', function(req, res){
  res.send('Hello savoye <img src=/savoye.jpg>');
});

app.get('/', (req, res)=>{
  // res.send('Main Entry Point in nodejs');
  res.send(req.query.id +', ' + req.query.name);
});

app.get('/dynamic', function(req, res){
  var lis = ''
  for( var i=0; i<5; i++ ){
    lis = lis + '<li>Coding</li>';
  }
  var output = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title></title>
    </head>
    <body>
      Hello, Dynamic!
      ${lis}
    </body>
  </html>
`;
  res.send(output);
});

app.get('/hello', (req, res)=>{
    res.send('<h1>hello</h1>');
});

app.listen(3000, ()=>{
  console.log("Connected 3000!!!");
});
