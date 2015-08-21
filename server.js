var express  = require('express');
var app      = express();

app.use(express.static(__dirname + '/src'));

app.listen(7000);
console.log("App listening on port 7000");
