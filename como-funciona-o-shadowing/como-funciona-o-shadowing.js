var volks = {
	fabricante: 'VW'
}

var fox = {
	nome: 'Fox',
	placa: 'AAA-1111',
	fabricante: 'GM'
}

console.log('fox.fabricante:', fox.fabricante);

Object.setPrototypeOf(fox, volks);
console.log('fox.fabricante:', fox.fabricante); // 'GM'

console.log('fox', fox);

delete fox.fabricante
console.log('fox.fabricante ->', fox.fabricante); // 'VW'
console.log('fox', fox);

for(propriedade in fox) {
	console.log(propriedade, fox.hasOwnProperty(propriedade));
}
