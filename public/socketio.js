

var socket = io(window.location.origin);
socket.on('tweet', (coordinates) => {
	var cords = new google.maps.LatLng(coordinates.lat, coordinates.lng);
	cordArray.push(cords);
	console.log("We are Coordinates",coordinates);
});

