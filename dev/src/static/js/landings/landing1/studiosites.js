new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 100,
    mobile: true,
    live: true
}).init();

let navMenuBtn = document.querySelector( 'main>input[type="checkbox"]' ),
    body = document.querySelector( 'body' ),
    navLinks = document.querySelectorAll( 'main>nav>ul>li>a' );

navMenuBtn.addEventListener( 'change', function () {
    if( this.checked ) {
        body.style.overflowY = 'hidden';
        navLinks.forEach( link => {
            link.addEventListener( 'click', function () {
                navMenuBtn.checked = false;
                body.style.overflowY = '';
            });
        });
    } else {
        body.style.overflowY = '';
    }
});