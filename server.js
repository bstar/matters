var express  = require('express');
var app      = express();

app.use(express.static(__dirname + '/src'));

app.listen(3006);
console.log("App listening on port 3006");
