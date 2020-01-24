let bcg = document.querySelector( '.title' );
let currentColor = [255, 255, 255];
let currentStep = 0;
let oldTime = 0;
let steps = 100;
let delta= 69;

function getRandomColor () {
    'use strict';

    let color = [];

    for( let i = 0; i < 3; i++) {
        color.push( Math.floor(Math.random() * 255 ));
    }

    return color;
}

let nextColor = getRandomColor();

function changeColor() {
    'use strict';

    currentStep++;
    
    bcg.style.backgroundColor =
        'rgb( ' + currentColor.map( function(e,i) {
                return Math.floor(e + ( nextColor[i] - e) * 
                currentStep / steps );
            }).join(', ') + ')';

    if (currentStep == 100) {
        currentStep = 0;
        currentColor = nextColor;
        nextColor = getRandomColor();
    }
}

let animate = function (currentTime) {
    'use strict';

    if( oldTime === 0 ) {
        oldTime = currentTime;
    }

    if( currentTime - oldTime >= delta ) {
        changeColor();
        oldTime = currentTime;
    }

    requestAnimationFrame( animate );
};

requestAnimationFrame( animate );
