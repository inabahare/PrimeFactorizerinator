'use strict';

const express = require('express');
const router = express.Router();

const factor = require("../helpers/prime-factor");

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Your new app' });
});

// If the user tries to access the page
router.get('/number/', (req, res, next) => {
	res.redirect("/");
});

router.post('/number/', (req, res, next) => {

	let userNumber = req.body.number; // The number the user wants to factor
	
	console.log(userNumber);

	if (!userNumber) {
		res.redirect("/");
	}

	let factorArray = factor(userNumber); // 
	let returnString = "SAD!";

	// Check if prime
	if (factorArray[0] == userNumber) {
		returnString = userNumber + " er et primtal";
	}

	// Check if not prime
	if (factorArray[0] != userNumber) {
		returnString = userNumber + " = " + factorArray.join(" * ");
	}

	// Show the page
	res.render('number', {
		title: "Nummer",
		parse: returnString
	});
});


module.exports = router;