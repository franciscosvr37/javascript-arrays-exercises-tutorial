let arrayOfCelsiusValues = [-2, 34, 56, -10];

let arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function(value) {
	
	// Add your code here and return the new value
	let convertido=(value * 9/5) + 32 
	return convertido
});

console.log(arrayOfFahrenheitValues);
