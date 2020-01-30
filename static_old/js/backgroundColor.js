let bcg = document.querySelector( '.title' ),
    currentColor = [255, 255, 255],
    currentStep = 0,
    oldTime = 0,
    steps = 100,
    delta= 69;

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
