var approx = require('./approx.js')
var calcBmi = require('../../index.js')

module.exports = function BmiAssertFactory(t, imperial) {
	var wUnit = imperial ? 'lbs' : 'kg'
	var hUnit = imperial ? 'inches' : 'meters'

	return function ab(bmiValue, weight, height) {
		var bmi = calcBmi(weight, height, imperial)
		var msg = '| ' + weight + ' ' + wUnit + ' + ' + height + ' ' + hUnit +
			' = ' + bmiValue + ' bmi = ' + bmi.value.toPrecision(4) + ' bmi'
		t.ok( approx(bmi.value, bmiValue), msg )
	}
}
