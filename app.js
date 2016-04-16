

const express = require('express');
const app = express(); 
const server = require('http').Server(app);
const path = require('path');
const client = require('./secrets.js');
require('./configure')(app); 
module.exports = require('socket.io')(server);
const routes = require('./routes');

const port = 1337;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'browser')));

app.use('/api', routes);

app.get('/*', (req, res, next) => {res.sendFile(app.get('indexHTMLPath')); });

server.listen(port, function(){console.log('listening to port: ', port);});

