bmi-calc
========

A Body Mass Index calculator.

# cli

- Install [node](http://nodejs.org/download).
- Run `npm install -g bmi-calc`
- Run `bmi-calc --weight 170 --height 73`. (Except put in your weight and height.)

```
Usage: bmi-calc OPTIONS

-h 64, --height=64    specify height in inches
-f 5, --feet=5        specify height in feet (can be used with -i)
-i 4, --inches=4      specify height in inches (can be used with -f)
-w 153, --weight=153  specify weight in pounds
-l 153, --lbs=153     specify weight in pounds
-p 153, --pounds=153  specify weight in pounds
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


# license

MIT
