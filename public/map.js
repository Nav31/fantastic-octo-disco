

var initMap = function() {
var map = new google.maps.Map(document.getElementById('map-canvas'), {
	  center: {lat: 40.7073069, lng: -74.0117484},
	  zoom: 6
	});
};
$(document).ready(function() {
  initMap();
});

