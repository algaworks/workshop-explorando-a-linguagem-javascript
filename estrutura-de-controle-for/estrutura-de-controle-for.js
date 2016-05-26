for (var i = 0; i < 5; i++) {
	console.log('i', i);
}

var s = 'AlgaWorks';
for (var k = 0, tamanho = s.length; k < tamanho; k++) {
	console.log('k', k);
}

var j = 5;
for (; j < 9; j++) {
	console.log('j', j);
}

var z = 0;
for (;z < 4;) {
	console.log('z', z);
	z++;
}

// loop infinito
var l = 0;
for (;;) {
	console.log('->', l++);

	if (l === 100) {
		break;
	}
}
