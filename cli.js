var minimist = require('minimist')
var helpMessage = require('./help-message.js')
var calcBmi = require('./')

var args = minimist(process.argv.slice(2)) || {}

var weight = args.l || args.lbs || args.p || args.pounds || args.k || args.kilograms || 0
var imperialHeight = (args.f || args.feet || 0) * 12 + (args.i || args.inches || 0)
var metricHeight = (args.m || args.meters || 0) + (args.c || args.centimeters || 0) / 100
var height = imperialHeight || metricHeight

//console.log(imperialHeight, metricHeight)

var bmi = calcBmi(weight, height, !!imperialHeight)

if (!bmi || !bmi.value || args.help) {
	console.error(helpMessage)
} else {
	console.log(bmi.value.toPrecision(3) + '\n' + bmi.name)
}
