//alert('hello');

//stara
function drawTree (h) {
	for (var i = 1; i <= h; i++) {
		var star = '*';
		for (var j = 1; j < i; j++) {
			star += '*';
		}
		console.log(star);
	}
}

//nowa
function drawTree (h) {
	for (var i = 1; i <= h; i++) {
		var star = '';
		for (j = 1; j <= i ; j++) {
			star += '*';
		}
		console.log(star);
	}
}