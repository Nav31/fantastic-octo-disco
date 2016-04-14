

var initMap = function() {
var map = new google.maps.Map(document.getElementById('map-canvas'), {
	  center: {lat: 30, lng: 0},
	  zoom: 2.0
	});
};
$(document).ready(function() {
  initMap();
});

