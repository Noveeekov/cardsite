var cnv = document.getElementById( 'canvas' ),
	ctx = cnv.getContext( '2d' ),
	wdt = cnv.width = window.innerWidth,
	hgh = cnv.height = window.innerHeight,

	opt = {
		backgroundColor: '#333',
		particleColor: '#ff0',
		defaultSpeed: 1,
		addedSpeed: 2,
		defaultRadius: 2,
		addedRadius: 2,
		particleAmount: 50,
		cmcRadius: 300,
		lineWidth: 0.5,
		lineColor: 'rgba( 0, 255, 0, opacity )',
	},

	prt = [],
	Particle = function ( posX, posY ) {
		this.x = posX ? posX : Math.random() * wdt;
		this.y = posY ? posY : Math.random() * hgh;
		this.speed = opt.defaultSpeed + Math.random() * opt.addedSpeed;
		this.directionAngle = Math.floor( Math.random() * 360 );
		this.color = opt.particleColor;
		this.radius = opt.defaultRadius + Math.random() * opt.addedRadius;
		this.dir = {
			x: Math.cos( this.directionAngle ) * this.speed,
			y: Math.sin( this.directionAngle ) * this.speed
		};

		this.update = function () {
			this.border();
			this.x += this.dir.x;
			this.y += this.dir.y;
		};
		this.border = function () {
			if( this.x >= wdt || this.x <= 0 ) {
				this.dir.x *= -1;
			}
			if( this.y >= hgh || this.y <= 0 ) {
				this.dir.y *= -1;
			}
			this.x > wdt ? this.x = wdt : this.x;
			this.y > hgh ? this.y = hgh : this.y;
			this.x < 0 ? this.x = 0 : this.x;
			this.y < 0 ? this.y = 0 : this.y;
		};
		this.draw = function () {
			ctx.beginPath();
			ctx.arc( this.x, this.y, this.radius, 0, Math.PI * 2 );
			ctx.closePath();
			ctx.fillStyle = this.color;
			ctx.fill();
		}
	},

	checkDistance = function ( x1, y1, x2, y2 ) {
		return Math.sqrt( Math.pow( x2 - x1, 2 ) + Math.pow( y2 - y1, 2 ) );
	};

	cmcPoints = function ( cld, pt ) {
		for ( var i = 0; i < pt.length; i++ ) {
			var distance = checkDistance( cld.x, cld.y, pt[i].x, pt[i].y );
			var opacity = 1 - distance / opt.cmcRadius;
			if( opacity > 0 ) {
				ctx.lineWidth = opacity;
				ctx.strokeStyle = opt.lineColor.replace( 'opacity', opacity );
				ctx.beginPath();
				ctx.moveTo( cld.x, cld.y );
				ctx.lineTo( pt[i].x, pt[i].y );
				ctx.closePath();
				ctx.stroke();
			}
		}
	}

function resizeCanvas () {
	wdt = cnv.width = window.innerWidth;
	hgh = cnv.height = window.innerHeight;
}

function setup () {
	for( var i = 0; i < opt.particleAmount; i++ ) {
		prt.push( new Particle() )
	}
	window.requestAnimationFrame( loop );
}

function loop () {
	ctx.fillStyle = opt.backgroundColor;
	ctx.fillRect( 0, 0, wdt, hgh );
	for( var i = 0; i < prt.length; i++ ) {
		prt[i].update();
		prt[i].draw();
	}
	for( var j = 0; j < prt.length; j++ ) {
		cmcPoints( prt[j], prt );
	}
	window.requestAnimationFrame( loop );
}

setup();

cnv.addEventListener( 'click', function( e ) {
	prt.push( new Particle( e.pageX, e.pageY ) );
} );

cnv.addEventListener( 'contextmenu', function( e ) {
	e.preventDefault();
	prt.splice( prt.length - 1, 1 );
} );

window.addEventListener( 'resize', resizeCanvas, false );

