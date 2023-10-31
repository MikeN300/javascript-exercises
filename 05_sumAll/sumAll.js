const sumAll = function(num1, num2) {
	//create a variable that holds the final sum
	if (num1 < 0 || !Number.isInteger(num1) || num2 < 0 || !Number.isInteger(num2) ) return "ERROR";
	let finalSum = 0;
	//create 2 consts, use them to determine the higher of the two args
	let higherArg = 0;
	let lowerArg = 0;
	if (num1 > num2) {
		higherArg = num1;
		lowerArg = num2;
	} else {
		higherArg = num2;
		lowerArg = num1;
	}
	//create a loop that starts with the lower arg and loops to the higher arg
	for(let i = lowerArg; i <= higherArg; i++) {
		finalSum += i;
	}
	//add i to the sum variable
	//return the sum
	return finalSum;
};

// Do not edit below this line
module.exports = sumAll;

