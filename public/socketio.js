

var socket = io(window.location.origin);
socket.on('tweet', (something, somethingElse) => {
	console.log('tweeted', something, " ", somethingElse);
});

