var test = require('tape')
var cp = require('child_process')
var path = require('path')
var approx = require('./helpers/approx.js')

function makeTest(args, expectBmi, expectHuman) {
	test('' + expectBmi + ' - ' + expectHuman, function (t) {
		var cliPath = path.resolve(__dirname, '..', 'cli.js')
		cp.execFile('node', [ cliPath ].concat(args), function (err, stdout, stderr) {
			t.notOk(err, err ? err.message : 'no err')
			t.notOk(stderr.length, 'no stderr')

			var stdoutPieces = stdout.toString().split('\n')
			var bmi = Number(stdoutPieces[0])
			var humanReadable = stdoutPieces[1]
			t.ok( approx(bmi, expectBmi), stdout.toString() )
			t.equal(humanReadable, expectHuman)
			t.end()
		})
	})
}

makeTest([ '-l', 153, '-i', 64 ], 26.26, 'Overweight')
makeTest([ '--lbs', 153, '--inches', 64 ], 26.26, 'Overweight')
makeTest([ '-p', 125, '-f', 5 ], 24.41, 'Normal')
makeTest([ '--pounds', 125, '--feet', 5 ], 24.41, 'Normal')
makeTest([ '-l', 200, '--inches', 84 ], 19.93, 'Normal')
makeTest([ '--lbs', 249, '-i', 69 ], 36.77, 'Severely Obese')

makeTest([ '--kilograms', 58, '--meters', 2 ], 14.5, 'Very Severely Underweight')
makeTest([ '-k', 58, '-m', 2 ], 14.5, 'Very Severely Underweight')
makeTest([ '-k', 80, '-c', 180 ], 24.69, 'Normal')
makeTest([ '-k', 94, '--centimeters', 172 ], 31.77, 'Moderately Obese')
