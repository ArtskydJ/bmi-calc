bmi-calc
========

A Body Mass Index calculator.

# example

```js
var calcBmi = require('bmi-calc')

// 154 lbs, 72 in, imperial
console.log( calcBmi(154, 72, true) )
// { value: 20.88, name: 'Normal' }

// 69 kg, 1.62 m, metric
console.log( calcBmi(69, 1.62, false) )
// { value: 26.29, name: 'Overweight' }

// 59 kg, 2 m, metric
console.log( calcBmi(59, 2) )
// { value: 14.75, name: 'Very Severely Underweight' }
```

# api

```js
var calcBmi = require('bmi-calc')
```

# `var bmi = calcBmi(weight, height, [imperial])`

- `weight` is a number in pounds or kilograms
- `height` is a number in inches or meters
- `imperial` is an optional boolean that defaults to `false`.
	- If `true`, `weight` is interpreted as pounds, and `height` as inches.
	- If `false`, `weight` is interpreted as kilograms, and `height` as meters.

# `bmi`

`bmi` is an object with the following properties:

- `value` is the bmi number, e.g. `21.36`
- `name` is a human-readable string, e.g. `'severely underweight'`


# cli

- Install [node](http://nodejs.org/download).
- Run `npm install -g bmi-calc`
- Run `bmi-calc --weight 170 --height 73`. (Except put in your weight and height.)

```
Usage: bmi-calc OPTIONS

-f 5, --feet=5         specify height in feet (can be used with -i)
-i 4, --inches=4       specify height in inches (can be used with -f)
-m 2, --meters=2       specify height in meters (can be used with -c)
-c 7, --centimeters=7  specify height in centimeters (can be used with -m)
-l 153, --lbs=153      specify weight in pounds
-p 153, --pounds=153   specify weight in pounds
-k 67, --kilograms=67  specify weight in kilograms
```

# license

MIT
