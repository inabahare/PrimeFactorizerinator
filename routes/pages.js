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


	if (!userNumber) {
		res.redirect("/");
	}

	let factorArray = factor(userNumber); // 
	let returnString = "";

	// It has to be a natural number. So the number can't be 0 or less
	if (userNumber <= 0) {
		returnString = "Tallet kan ikke være mindre end 0";
	}

	// Check if prime
	if (factorArray[0] == userNumber) {
		returnString = userNumber + " er et primtal";
	}

	console.log(factorArray);

	// Check if not prime. The users number is more than 1 
	if (factorArray[0] != userNumber && userNumber > 1) {
		returnString = userNumber + " = " + factorArray.join(" &middot; ");
	}

	// Last, check if the number is 1
	if (userNumber == 1) {
		returnString = "1 er ikke en faktor af 2 primtal";
	}

	// Show the page
	res.render('number', {
		title: "Nummer",
		parse: returnString
	});
});


module.exports = router;
