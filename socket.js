var server = require('./app.js'); 

const io = require('socket.io')(server);

module.exports = io;