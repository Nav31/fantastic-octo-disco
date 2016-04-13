

const express = require('express');
const router = express.Router();
const client = require('../secrets.js');


router.get('/*', (req, res, next) => {
	res.sendFile(app.get('indexHTMLPath')); 
});

module.exports = router;