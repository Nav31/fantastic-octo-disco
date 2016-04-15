

var socket = io(window.location.origin);
socket.on('tweet', function(coordinates) {
	console.log('tweeted', coordinates);
});

