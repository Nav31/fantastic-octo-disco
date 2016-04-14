

var socket = io(window.location.origin);
socket.on('tweet', (something) => {
	console.log('A tweet has been tweeted', something);
});

