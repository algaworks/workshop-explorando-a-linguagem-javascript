var incrementar = (function() {
	var valor = 0;

	return function() {
		return ++valor;
	}
})();

console.log(incrementar());
console.log(incrementar());
console.log(incrementar());