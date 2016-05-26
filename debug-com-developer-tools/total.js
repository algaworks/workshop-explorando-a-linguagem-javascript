console.log('Iniciando...');

var valorElement = document.getElementById('valor');
var totalElement = document.getElementById('total');

valorElement.addEventListener('keyup', function(e) {
	var total = 0;
	var valor = parseFloat(valorElement.value ? valorElement.value : 0);

	if (valor > 0 && valor < 10) {
		total = valor + valor * 0.3 + 5;
	} else if (valor >= 10 && valor < 50) {
		total = valor + valor * 0.1 + 2;
	} else {
		total = valor;
	}

	totalElement.innerHTML = total;
});