let title = document.querySelector( '.title' ),
    openBtn = document.querySelector( '.open-btn' ),
    navBar = document.querySelector( '.menu-nav' ),
    titleTxt = document.querySelector( '.title-text' ),
    projects = document.querySelector('.templates'),
    blurSection = document.querySelector('.about'),
    menuBtn = document.getElementById('switchBtn'),
    menuCbx = document.getElementById('switch'),
    direction = 0;

let translateCanvas = function () { // change position of title
    'use strict';

    if( direction === 0 && window.pageYOffset > 0 ) { // up
        direction = -90;
        navBar.style.visibility = 'visible';
        openBtn.style.visibility = 'hidden';
    } else if( window.pageYOffset === 0 ) { // down
        direction = 0;
        navBar.style.visibility = '';
        openBtn.style.visibility = '';
    }

    title.style.transform =
    title.style.WebkitTransform =
    title.style.MsTransform = 
                `translateY(${direction}%)`;
};

let open = function () { // change the position of title on click
    'use strict';

    window.scroll( 0, 100 );
};

let resetY = function () {
    'use strict';

    if(window.pageYOffset != 0) {
        window.scrollTo(0, 0);
    }
};

let viewProjects = function () {
    'use strict';

    if(direction === -90) {
        if(menuCbx.checked) {
            projects.style.display = '';
            blurSection.classList.remove('blur-background');
        } else {
            projects.style.display = 'flex';
            blurSection.classList.add('blur-background');
        }
    }
};

window.addEventListener( 'DOMContentLoaded', resetY );
window.addEventListener( 'scroll', translateCanvas );
openBtn.addEventListener( 'click', open );
menuBtn.addEventListener('click', viewProjects);