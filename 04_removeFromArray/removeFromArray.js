const removeFromArray = function(array, ...args) {
	for (let i = 0; i <= args.length; i++) {
		for (let x = array.length; x >= 0; x--) {
			if(array[x] === args[i]) {
				array.splice(x, 1)
			}
		}
	}
	return array;
};


// Do not edit below this line
module.exports = removeFromArray;
