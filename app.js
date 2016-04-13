

const express = require('express');
const app = express(); 
const twitter = require('twitter');
const morgan = require("morgan");
const path = require('path');
const routes = require('./routes');
const client = require('./secrets.js');
require('./configure')(app); 

const port = 1337;

app.use(morgan('dev')); 
app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', (req, res, next) => {
	res.sendFile(app.get('indexHTMLPath')); 
});

app.listen(port, function(){
	console.log('listening to port: ', port);
});

module.exports = app;