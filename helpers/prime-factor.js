"use strict";

// Calculates the primefactor and returns an array with all the primes
// Returns an array of primefactors, or false if number is not int
function primeFactor(n) {

	// Check if n is an integer
	if (!parseInt(n, 10)) {
		return false;
	}

	// Define an array containing all the factors
	let factorArray = [];

	// Check for divisions by 2 by checking if there is a remainder
	// So say n was 10, this would run once and n would be 5
	while (n % 2 == 0) {
		factorArray.push(2);
		n = n/2; 											// Split n by the factor of 2. 
	}

	// Now N will be an odd number

	// Now run through all possible odd divisors
	// i will be the divisor
	for (let i = 3; i <= Math.sqrt(n); i = i + 2) {

		// Check the remainder for when n is divided by i
		// If the remainder is 0, i will be a factor
		while (n % i == 0) {
			factorArray.push(i);
			n = n / i;
		}
	}

	// This is if n is a prime greater than 2
	if (n > 2) {
		factorArray.push(n);
	}

	// Then return the array
	return factorArray;
}

module.exports = primeFactor;