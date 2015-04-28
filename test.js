﻿var test = require('tape')
var calcBmi = require('./')

function approx(n1, n2) {
	return (n1 <= n2 + 0.1) && (n1 >= n2 - 0.1)
}

function BmiAssertFactory(t, imperial) {
	var wUnit = imperial ? 'lbs' : 'kg'
	var hUnit = imperial ? 'inches' : 'meters'

	return function ab(bmiValue, weight, height) {
		var bmi = calcBmi(weight, height, imperial)
		var msg = '| ' + weight + ' ' + wUnit + ' + ' + height + ' ' + hUnit +
			' = ' + bmiValue + ' bmi = ' + bmi.value.toPrecision(4) + ' bmi'
		t.ok( approx(bmi.value, bmiValue), msg )
	}
}

test('helpers', function (t) {
	t.plan(7)
	t.ok( approx(5, 5) )
	t.ok( approx(5, 5.1) )
	t.ok( approx(5, 4.9) )
	t.notOk( approx(5, 5.11) )
	t.notOk( approx(5, 4.89) )
	t.notOk( approx(5, 6) )
	t.notOk( approx(5, 4) )
	t.end()
})

test('calculates metric correctly', function(t) {
	var assertBmi = BmiAssertFactory(t, false)

	assertBmi(14.5, 58, 2)
	assertBmi(24.69, 80, 1.8)
	assertBmi(31.77, 94, 1.72)

	t.end()
})

test('calculates imperial correctly', function(t) {
	var assertBmi = BmiAssertFactory(t, true)

	assertBmi(26.26, 153, 64)
	assertBmi(24.41, 125, 60)
	assertBmi(19.93, 200, 84)
	assertBmi(36.77, 249, 69)

	t.end()
})

// Add tests for CLI
