module.exports = function approx(n1, n2) {
	return (n1 <= n2 + 0.1) && (n1 >= n2 - 0.1)
}
