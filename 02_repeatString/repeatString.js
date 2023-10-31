const repeatString = function(string, num) {
	let returnString = '';
	if (num < 0) {
		return 'ERROR'
	} else {
		for (let i = 0; i < num; i++) {
				returnString = returnString.concat(string)
		}
	}
	return returnString;

};

// Do not edit below this line
module.exports = repeatString;
