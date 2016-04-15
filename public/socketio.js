

var socket = io(window.location.origin);
socket.on('tweet', function(coordinates) {
	var cords = new google.maps.LatLng(coordinates.lat, coordinates.lng);
	cordArray.push(cords);
	console.log('tweeted', coordinates);
});

