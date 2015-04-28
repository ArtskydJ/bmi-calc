var bmiNames = require('./bmi-names.json')
require('array.prototype.find')

// calc(pounds, inches, true)
// calc(kilograms, meters)
function calc(weight, height, imperial) {
	var multiplier = imperial ? 703 : 1
	return (multiplier * weight) / (height * height)
}

function name(bmi) {
	var set = bmiNames.find(function (set) {
		return (bmi >= set.gte && bmi < set.lt)
	})
	return set && set.name
}

module.exports = function calcBmi(weight, height, imperial) {
	var bmi = calc(weight, height, imperial)
	return {
		value: bmi,
		name: name(bmi)
	}
}
