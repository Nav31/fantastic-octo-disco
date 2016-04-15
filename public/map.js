

var map, heatmap;
var cordArray = [];
function initMap() {
  map = new google.maps.Map(document.getElementById('map-canvas'), {
	  center: {lat: 30, lng: 0},
	  zoom: 2.0,
      mapTypeId: google.maps.MapTypeId.SATELLITE
  });

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map
  });
}

function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
  var gradient = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)'
  ];
  heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
}

function changeRadius() {
  heatmap.set('radius', heatmap.get('radius') ? null : 20);
}

function changeOpacity() {
  heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
}
console.log('IM A CORD ARRAY',cordArray);
console.log(heatmap);
function getPoints() {
	return cordArray;
	
}

$(document).ready(function() {
  initMap();
  setInterval(function(){
  	console.log('am doign something');
  	heatmap = new google.maps.visualization.HeatmapLayer({
	    data: getPoints(),
	    map: map
	  });
  }, 1000);
});

