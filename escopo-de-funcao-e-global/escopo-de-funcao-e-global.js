var nome = 'AlgaWorks'; // variável global

var capitalizar = function() {
	// nome é uma variável local à função capitalizar
	var nome = 'AlgaWorks'.toUpperCase();
}
capitalizar();
console.log('nome', nome);

var capitalizar2 = function() {
	nome = 'AlgaWorks'.toUpperCase();
}
capitalizar2();
console.log('nome2', nome);