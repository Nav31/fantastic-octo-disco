

const express = require('express');
const router = express.Router();
const client = require('../secrets.js');
const twitter = require('twitter');

// console.log('IM A CLIENT',client)
router.get('/search/:q', (req, res, next) => {
	client.get('search/tweets', {q: req.params.q }, (error, tweets, response) => {
		console.log(tweets.statuses[0])
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

// stream a subject ie Javascript
router.get('/stream/:q', (req, res, next) => {
	console.log('IM GETTING TO THIS ROUTE');
	client.stream('statuses/filter', {track: req.params.q}, stream => {
		stream.on('data', tweet => {
			console.log(tweet);
		});
		stream.on('error', error => {
			console.log(error);
		});
	});
});

module.exports = router;