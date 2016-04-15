

const google = require('./secrets.js').google;
const http = require('https');

const frontUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
const backUrl = '&key='+ google.serverKey;

var getCoords = (location, callback) => {
	if((/[^a-zA-Z0-9\s,]/g.test( location ))){
		return;
	}
	 http.get(frontUrl +  location + backUrl, (res) => {
		var string = '';
		res.on('data', chunck => {
			string += chunck;
		}).on('error', (e) => {

		}).on('end', () => {
			// console.log(string);
			// console.log(location);
			if(JSON.parse(string).results[0]){
				var coordinates = JSON.parse(string).results[0].geometry.location; 
				//console.log('Coordinates', coordinates)
				callback(coordinates); 
			} else {
				console.log("it's not a valid location");
			}
		});
	});	
};

//getCoords('we solved it');

module.exports = getCoords;