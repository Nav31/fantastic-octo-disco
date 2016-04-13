

const express = require('express');
const router = express.Router();
const client = require('../secrets.js');
const twitter = require('twitter');

// console.log('IM A CLIENT BITCH',client)
router.get('/:q', (req, res, next) => {
	client.get('search/tweets', {q: req.params.q }, (error, tweets, response) => {
   		res.json(tweets); 
	});
});


module.exports = router;