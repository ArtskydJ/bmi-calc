var test = require('tap').test
var areEqual = require('../index.js')

test('test for equality', function(t) {
	t.ok(    areEqual( {hi: 4, no: 2}, {hi: 4, no: 2} ), "Exact objects")
	t.ok(    areEqual( {hi: 4, no: 2}, {no: 2, hi: 4} ), "Properties out of order")
	t.notOk( areEqual( {hi: 4, no: 2, sad: 0}, {hi: 4, no: 2} ), "Extra property in first object")
	t.notOk( areEqual( {hi: 4, no: 2}, {hi: 4, no: 2, sad: 0} ), "Extra property in second object")
	t.ok(    areEqual( {}, {} ), "Empty objects")
	t.notOk( areEqual( {um: 1}, {um: 3} ), "Different values inside a property")
	t.end()
})