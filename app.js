var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'pug');
app.set('views', './views');
app.locals.pretty = true;
app.use(express.static('public'));
app.get('/form', function(req, res){
  res.render('form');
})
app.post('/form_receiver', (req, res)=>{
  var title = req.body.title;
  var desc = req.body.desc;
  res.send('Hello, POST: '+title+', ' +desc);

  // res.json(req.body);
})
app.get('/form_receiver', function(req,res){
  var title = req.query.title;
  var desc = req.query.desc;
  res.send(title + ', '+ desc);
})
app.get('/template', function(req, res){
    res.render('temp', {_title:'Pug(Jade))', time:Date()});
})

app.get('/savoye', function(req, res){
  res.send('Hello savoye <img src=/savoye.jpg>');
});

app.get('/topics/:id', (req, res)=>{
  // res.send('Main Entry Point in nodejs');
  var topics = [
    'Javascript...',
    'Nodejs...',
    'Expressjs...'
  ];
  var h1 = `
    <a href=/topics/0>Javascript</a></br>
    <a href=/topics/1>Nodejs</a></br>
    <a href=/topics/2>Expressjs</a></br></br>
    ${topics[req.params.id]}
  `;
  res.send(h1);
  // res.send(topics[req.query.id]);
});

app.get('/topics/:id/:mode', function(req, res) {
  res.send(req.params.id + ', '+ req.params.mode);
})

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
