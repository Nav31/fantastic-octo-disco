

var socket = io(window.location.origin);
socket.on('tweet', (coordinates) => {
	console.log('tweeted', coordinates);
});

