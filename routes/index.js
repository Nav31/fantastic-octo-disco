

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
	router.get('/stream/:q', (req, res, next) => {
		client.stream('statuses/filter', {track: req.params.q}, stream => {
			stream.on('data', tweet => {
				if(tweet.user.location){
					socket.emit("tweet", getCords(tweet.user.location));
				} 
			});
			stream.on('error', error => {
				console.log(error);
			});
		});
	});
}); 

// console.log('IM A CLIENT',client)
router.get('/search/:q', (req, res, next) => {
	client.get('search/tweets', {q: req.params.q }, (error, tweets, response) => {
		console.log(tweets.statuses[0]);
   		res.json(tweets); 
	});
});

// should get some list
router.get('/favorites', (req, res, next) => {
	client.get('favorites/list', (error, tweets, response) => {
		if(error) { throw error;}
		else {res.json(tweets);}
	});
});


module.exports = router;