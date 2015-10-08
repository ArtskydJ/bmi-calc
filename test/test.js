var test = require('tape')
var BmiAssertFactory = require('./helpers/bmi-assert.js')

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
