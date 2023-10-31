const reverseString = function(string) {
	let splitString = string.split("");
	let splitStringReverse = [];
	let x = 0;
	for (let i = splitString.length; i >= 0; i--) {
		splitStringReverse[x] = splitString[i];
		x++;
	}
	return splitStringReverse.join("");
};

// Do not edit below this line
module.exports = reverseString;
