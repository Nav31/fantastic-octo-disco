

const express = require('express');
const router = express.Router();
const client = require('../secrets.js').twitter;
const google = require('../secrets.js').google;
const twitter = require('twitter');
const io = require('../app.js');


io.on('connection', (socket) => {
	router.get('/stream/:q', (req, res, next) => {
		client.stream('statuses/filter', {track: req.params.q}, stream => {
			stream.on('data', tweet => {
				socket.emit("tweet", tweet);
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

// This is a stream of tweets 
// stream a subject ie Javascript
// router.get('/stream/:q', (req, res, next) => {
// 	client.stream('statuses/filter', {track: req.params.q}, stream => {
// 		stream.on('data', tweet => {
// 			res.json(tweet);
// 		});
// 		stream.on('error', error => {
// 			console.log(error);
// 		});
// 	});
// });

module.exports = router;