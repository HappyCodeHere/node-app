
const express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();

var port = process.env.PORT || 3090;

app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*'}));



/*var server = http.createServer(app);
server.listen(port);*/

app.listen(port);
console.log('Server listening on: ', port);

