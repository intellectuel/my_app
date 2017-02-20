var express = require('express');
///var path = require('path');
var app = express();

app.use(express.static((__dirname + 'public')));
console.log("__dirname = " + __dirname);

app.listen(8080, function(){
  console.log('Server On!');
});
