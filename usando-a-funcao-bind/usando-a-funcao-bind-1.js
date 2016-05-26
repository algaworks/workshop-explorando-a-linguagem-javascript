var estado = (function() {
	var comboEstado = $('#combo-estado');
	
	function iniciar() {
		$.ajax({
			url: 'http://localhost:8080/estados',
			method: 'GET',
			dataType: 'jsonp',
			success: onEstadosRetornados,
			error: onError
		});
	}

	function onEstadosRetornados(estados) {
		comboEstado.html('<option>Selecione o estado</option>');
		estados.forEach(function(estado) {
			var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
			comboEstado.append(optionEstado);
		});
	}

	function onError() {
		alert('Erro carregando estados do servidor!');
	}

	return {
		iniciar: iniciar
	}
	
})();

estado.iniciar();
