var test = require('tape')
var approx = require('./helpers/approx.js')

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
