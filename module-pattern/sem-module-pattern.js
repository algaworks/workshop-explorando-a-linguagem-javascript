var contador = {
	valor: 0,
	incrementar: function() {
		this.valor++;
	},
	reset: function() {
		console.log('Valor do contador agora:', this.valor);
		this.valor = 0;
	}
}

// contador.valor = 'AlgaWorks';

contador.incrementar();
contador.incrementar();

contador.reset();

contador.incrementar();
contador.reset();