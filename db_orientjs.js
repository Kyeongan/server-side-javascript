var OrientDB = require('orientjs');

var server = OrientDB({
   host:       'localhost',
   port:       2480,
   username:   'root',
   password:   'Karl98@!'
});

var db = server.use('o2');
console.log('Using Database:'  + db.name);

// var rec = db.record.get('#21:0')
//    .then(
//       function(record){
//          console.log('Loaded Record:', record);
//        }
//    );

// var sql = 'SELECT * FROM topics';
// db.query(sql).then(function(results){
//   console.log("Log:" + results);
// });

db.query(
   'SELECT title FROM topics '
  //  + 'WHERE ba >= 0.3 AND team = "Red Sox"'
).then(function(hitters){
   console.log(hitters)
});
