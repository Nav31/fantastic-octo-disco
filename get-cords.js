

const google = require('./secrets.js').google;
const http = require('https');

const frontUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
const backUrl = '&key='+ google.serverKey;

var getCoords = (location) => {
	http.get(frontUrl +  location + backUrl, (res) => {
		var string = '';
		res.on('data', chunck => {
			string += chunck;
		}).on('end', () => {
			if(JSON.parse(string).results[0]){
				var coordinates = JSON.parse(string).results[0].geometry.location; 
				console.log('IM A JSON STRING', coordinates)
			} else {
				console.log("it's not a valid location");
			}
			//return JSON.parse(string).results[0].geometry.location;
		});
	});	
};

//getCoords('we solved it');

module.exports = getCoords;