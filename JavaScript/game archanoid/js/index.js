// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller
// fixes from Paul Irish and Tino Zijdel

(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

var b, boxes, pl = "", ba = "", play = false;
var vX = 5, vY = 5;
var mx = 0, my = 0;

function makeObj(obj) {
	return document.createElement(obj);
}

function addChild( obj ) {
	b.appendChild( obj );
}

function nextLevel() {
	vX += 1; 
	vY += 1;
	reset();
}

function makePlayer() {
	pl = makeObj( "div" );
	pl.className = "box player";
	pl.style.left = (window.innerWidth * 0.5)  + "px";
	pl.style.top = (window.innerHeight* 0.9) + "px";
	pl.style.width = "80px";
	pl.style.height = "20px";
	addChild( pl );
}

function makeBall() {
	ba = makeObj( "div" );
	ba.className = "ball";
	ba.style.left = (window.innerWidth * 0.5)  + "px";
	ba.style.top = (window.innerHeight* 0.85) + "px";
	ba.style.width = "12px";
	ba.style.height = "10px";
	addChild( ba );
}

function makeBoxes() {
	var s = "", bo = "", i = 0, j = 0;
	boxes = [];

	for ( j = 0; j < 3; j++) {
		for ( i = 0; i < 10; i++) {
			bo = document.createElement('div');
			
			if (j === 0) s = 'box yellow';
			if (j === 1) s = 'box orange';
			if (j === 2) s = 'box green';

			bo.className = s;
			b.appendChild( bo );
			bo.style.left = (100 + (100 * i) + (5 * i) + (2 * i) ) + "px";
			bo.style.top = (10 + (32 * j) + (5 * j) + (2 * j) ) + "px";
			bo.style.width = "80px";
			bo.style.height = "20px";
			boxes.push( bo );
		}
	}
}

function reset() {
	document.body.innerHTML = "";
	play = false;
	makeBoxes();
	makePlayer();
	makeBall();
}

function init() {
	b = document.body;
	reset();
}

function getX( obj ) {
	return parseInt(obj.style.left);
}
function setX( obj, value ) {
	obj.style.left = value + "px";
}
function getWidth( obj ) {
	return parseInt(obj.style.width);
}
function getY( obj ) {
	return parseInt(obj.style.top);
}
function setY( obj, value ) {
	obj.style.top = value + "px";
}
function getHeight( obj ) {
	return parseInt(obj.style.height);
}

function animate() {
	moveball();

	requestAnimationFrame( animate );
}

function hitTest( obja, objb ) {
	var oa = {
		"x": getX( obja ),
		"y": getY( obja ),
		"w": getWidth( obja ),
		"h": getHeight( obja )
	};
	var ob = {
		"x": getX( objb ),
		"y": getY( objb ),
		"w": getWidth( objb ),
		"h": getHeight( objb )
	};
	
    if ((oa.x + oa.w >= ob.x  && oa.x <= ob.x + ob.w) &&
         (oa.y + oa.h >= ob.y  && oa.y <= ob.y + ob.h)) {
      return true;
    }
    return false;
}

function moveball() {
	if ( boxes.length > 0 ) {
		var px = getX( ba ), 
			py = getY( ba );
		var sa = "",
			sb = "";
		var bl = boxes.length;
	
		if ( ( py + vY ) > window.innerHeight ) vY = 5;
		if ( ( py + vY ) < 0) vY = -5;
		if ( ( px + vX ) > window.innerWidth ) vX = 5;
		if ( ( px + vX ) < 0) vX = -5;
		
		
		if (play === false) {
			setX( ba, mx - 6 );
			setX( pl, mx - 43 );
		} else {
			setY( ba, py - vY );
			setX( ba, px - vX );
			setX( pl, mx - 43 );
		}
	
		for ( var i = 0; i < boxes.length; ++i ) {
			if ( hitTest( ba, boxes[ i ] ) ) {
				boxes[ i ].style.display = "none";
				boxes[ i ].style.height = "0px";
				sb = boxes.slice(i+1, bl );
				sa = boxes.slice(0, i );
				
				boxes = sa.concat( sb );
	
				vX =  vX;
				vY = - vY;
			}
		}
	
		if (hitTest(ba,pl)) {
			vX =  vX;
			vY = - vY;
		}
	
		setX( pl, mx - 43 );
	} else {
		nextLevel();
	}
}

document.onkeypress = function( event ) {
	//console.log( event );
	if ( event.keyCode === 32 ) {
		if ( play === false ) {
			play = true;
			animate();
		}
		else {
			play = false;
		}
	}
}

document.onmousemove = function( event ) {
	mx = event.clientX;
	my = event.clientY;
}

init();