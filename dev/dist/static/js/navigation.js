let title = document.querySelector( '.title' ),
    openButton = document.querySelector( '.open-btn' ),
    navBar = document.querySelector( '.menu-nav' ),
    titleText = document.querySelector( '.title-text' ),
    projects = document.querySelector('.templates'),
    blurSection = document.querySelector('.about'),
    projectButton = document.getElementById('switchBtn'),
    projectCheckbox = document.getElementById('switch'),
    direction = 0;

let translateCanvas = function () { // change position of title
    "use strict";

    if( direction === 0 && window.pageYOffset > 0 ) { // up
        direction = -90;
        // navBar.style.visibility = 'visible';
        openButton.style.visibility = 'hidden';
    } else if( window.pageYOffset === 0 && direction != 0) { // down

        direction = 0;
        // navBar.style.visibility = '';
        openButton.style.visibility = '';
    }
    title.style.transform =
    title.style.WebkitTransform =
    title.style.MsTransform = 
                `translateY(${direction}%)`;
};

// $(window).bind("mousewheel DOMMouseScroll MozMousePixelScroll", function (event) {
//     delta = parseInt(event.originalEvent.wheelDelta || -event.originalEvent.detail);
//     if(delta >= 0) {
//         console.log("top");
//         direction = 0;
//         navBar.style.visibility = '';
//         openButton.style.visibility = '';
//         title.style.transform =
//         title.style.WebkitTransform =
//         title.style.MsTransform = 
//                     `translateY(${direction}%)`;
//     }
//     else {
//         console.log("bottom");
//         direction = -90;
//         navBar.style.visibility = 'visible';
//         openButton.style.visibility = 'hidden';
//         title.style.transform =
//         title.style.WebkitTransform =
//         title.style.MsTransform = 
//                     `translateY(${direction}%)`;
//     }
// });

let open = function () { // change the position of title on click
    'use strict';

    window.scroll( 0, 100 );
};

let resetY = function () {
    "use strict";

    if(window.pageYOffset != 0) {
        window.scrollTo(0, 0);
    }
};

let viewProjects = function () {
    'use strict';

    if(direction === -90) {
        if(projectCheckbox.checked) {
            projects.style.display = '';
            blurSection.classList.remove('blur-background');

            // title.style.display = "";

            title.style.transform =
            title.style.WebkitTransform =
            title.style.MsTransform = 
                        `translateY(${direction}%)`;

            document.body.style.overflow = "";
        } else {
            projects.style.display = 'flex';
            blurSection.classList.add('blur-background');

            // title.style.display = "none";

            title.style.transform =
            title.style.WebkitTransform =
            title.style.MsTransform = 
                        `translateY(${direction - 300}%)`;

            document.body.style.overflow = "hidden";
        }
    }
};

window.addEventListener( 'DOMContentLoaded', resetY );
window.addEventListener( 'scroll', translateCanvas );
openButton.addEventListener( 'click', open );
projectButton.addEventListener('click', viewProjects);