// const removeFromArray = function(array, ...args) {
// 	let returnArray = []
// 	for (let i = 0; i <= args.length; i++) {
// 		for (let x = 0; x <= array.length; x++) {
// 			if (array[x] !== args[i]) {
// 				returnArray.push(array[i])
// 			}
// 		}
//  	}
// 	return returnArray;
// };


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
