function stl ( x, y ) {
	'use strict';
	document.querySelector('.cube').style.transform = 
		'rotateY(' + y + 'deg)'+
		'rotateX(' + x + 'deg)';
}

(function () {
	'use strict';
	let rotateY = 0,
		rotateX = 0;

	document.onkeydown = function (e) {
	    if (e.keyCode === 37) rotateY -= 6;
		else if (e.keyCode === 38) rotateX += 6;
		else if (e.keyCode === 39) rotateY += 6;
		else if (e.keyCode === 40) rotateX -= 6;

		stl(rotateX, rotateY);
	};
})();