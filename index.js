var weightRe = /([0-9]+(?:\.[0-9]+)?)(?:lbs?)?/i
var heightRe = /([0-9]+(?:([.,-]|(feet|ft),?)[0-9]+|'[0-9]+")?)(?:\s?in(ches)?)?/i

var names = [
	"Very Severely Underweight",
	"Severely Underweight",
	"Underweight",
	"Normal",
	"Overweight",
	"Moderately Obese",
	"Severely Obese",
	"Very Severely Obese"
]
var values = [0, 15, 16, 18.5, 25, 30, 35, 40]

function getWeightHeight(arr) {
	if (arr.length<2) {
		return new Error("Not enough arguments to function")
	} else {
		arr = arr.slice(0,2)
		var result = {}
		var w0 = weightRe.test(arr[0])
		var w1 = weightRe.test(arr[1])
		var h0 = heightRe.test(arr[0])
		var h1 = heightRe.test(arr[1])
		if ((w0 && !w1) || (!h0 && h1)) {
			result.weight = arr[0]
			result.height = arr[1]
		} else if ((!w0 && w1) || (h0 && !h1)) {
			result.height = arr[0]
			result.weight = arr[1]
		} else if (parseInt(arr[0]) < parseInt(arr[1])) {
			result.height = arr[0]
			result.weight = arr[1]
		} else {
			result.weight = arr[0]
			result.height = arr[1]
		}
		return result
	}
}

function parseInfo(info) {
	var weight = parseInt(info.weight)
	var height = info.height
	var temp = /([0-9]+)'([0-9]+)"/.exec(height)
	if (temp != null) {
		height = parseInt(temp[1])*12 + parseInt(temp[2])
	} else {
		temp = /([0-9]+)(ft|foot|[,.-])([0-9]+)(in(s|ch|ches))?/i.exec(height)
		if (temp != null) {
			if (temp[2]==".")
				height = parseFloat(height)
			else
				height = parseInt(temp[1])*12 + parseInt(temp[3])||0
		} else {
			temp = /([0-9]+)/.exec(height)
			if (temp != null) {
				height = parseInt(temp[1])
			} else {
				height = parseInt(height)
			}
		}
	}
	return {
		weight: weight,
		height: height
	}
}

function calcBmi(obj) {
	return (703*obj.weight)/(obj.height*obj.height)
}

function nameBmi(bmi) {
	bmi = parseInt(bmi, 10)
	var str = ""
	for(var i=0; i<names.length; i++) {
		if (bmi>values[i]) {
			str = names[i]
		}
	}
	return str
}

var args = process.argv.slice(2)
var info = getWeightHeight(args)
console.log(info)
info = parseInfo(info)
console.log(info)
var bmi = calcBmi(info)
console.log(bmi)
console.log(nameBmi(bmi))