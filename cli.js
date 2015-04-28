var minimist = require('minimist')
var helpMessage = require('./help-message.js')
var calcBmi = require('./')

function parsePounds(args) {
	return (
		args.w || args.weight ||
		args.l || args.lbs ||
		args.p || args.pounds || 0
	)
}

function parseInches(args) {
	return (
		args.h || args.height || (
			(args.f || args.feet || 0) * 12 +
			(args.i || args.inches || 0)
		)
	)
}

var args = minimist(process.argv.slice(2))
var pounds = parsePounds(args)
var inches = parseInches(args)
var bmi = calcBmi(pounds, inches, true)
var msg = (!bmi || !bmi.value || args.help) ?
	helpMessage : [
		'Pounds: ' + pounds,
		'Inches: ' + inches,
		'BMI: ' + bmi.value.toPrecision(3),
		bmi.name
	].join(', ')
console.log(msg)
