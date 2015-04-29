var minimist = require('minimist')
var helpMessage = require('./help-message.js')
var calcBmi = require('./')

function isImperial() {
	return !!(parsePounds() * parseInches())
}

function parsePounds() {
	return args.l || args.lbs || args.p || args.pounds || 0
}

function parseInches() {
	return (
		(args.f || args.feet || 0) * 12 +
		(args.i || args.inches || 0)
	)
}

function parseKilograms() {
	return args.k || args.kilograms || 0
}

function parseMeters() {
	return (
		(args.m || args.meters || 0) +
		(args.c || args.centimeters || 0) / 100
	)
}

var args = minimist(process.argv.slice(2)) || {}

var imperial = isImperial(args)
var w = (imperial ? parsePounds : parseKilograms)(args)
var h = (imperial ? parseInches : parseMeters)(args)
var bmi = calcBmi(w, h, imperial)

console.log(
	(!bmi || !bmi.value || args.help) ?
		helpMessage :
		bmi.value.toPrecision(3) + '\n' + bmi.name
)
