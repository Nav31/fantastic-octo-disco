

const express = require('express');
const router = express.Router();
const client = require('../secrets.js').twitter;
const google = require('../secrets.js').google;
const twitter = require('twitter');
const io = require('../app.js');
const getCords = require('../get-cords.js');

const frontUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
const backUrl = '&key='+ google.serverKey;

io.on('connection', (socket) => {
	socket.emit('end');
	router.get('/stream/:q', (req, res, next) => {
		client.stream('statuses/filter', {track: req.params.q}, stream => {
			stream.on('data', tweet => {
				if(tweet.user.location){
					getCords(tweet.user.location, (coords) => {
						console.log(coords);
						socket.emit("tweet", coords);
					});
				} 
			});
			stream.on('error', error => {console.log(error);});
			socket.on('end', () => {stream.destroy();});
		});
		res.sendStatus(200);
	});
	
}); 

router.get('/search/:q', (req, res, next) => {
	client.get('search/tweets', {q: req.params.q }, (error, tweets, response) => {
		console.log(tweets.statuses[0]);
   		res.json(tweets); 
	});
});

router.get('/favorites', (req, res, next) => {
	client.get('favorites/list', (error, tweets, response) => {
		if(error) { throw error;}
		else {res.json(tweets);}
	});
});

module.exports = router;