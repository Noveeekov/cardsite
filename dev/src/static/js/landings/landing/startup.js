let btn = document.querySelector( '.menu-button' ),
    nav = document.querySelector( '.menu-links' );

function showMenu () {'use strict';
    btn.addEventListener( 'click', () => {
        btn.classList.toggle( 'button-active' );
        nav.classList.toggle( 'menu-active' );
    });
}

function hiddenMenu () {'use strict';
    if ( document.body.clientWidth < 768 ) {
        btn.classList.toggle( 'button-active' );
        nav.classList.toggle( 'menu-active' );
    }
}

showMenu();

/* Slick */

$( '.photos' ).slick({
    slidesToShow: 4,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 992,
            settings: {
                arrows: false,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }
    ]
});

$( '.work-row' ).slick({
    slidesToShow: 3,
    variableWidth: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 2,
                infinite: false,
                variableWidth: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 2,
                infinite: false,
                variableWidth: false,
            }
        },
        {
            breakpoint: 576,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 1,
                infinite: false,
                variableWidth: false,
            }
        }
    ]
});

/* Clients */

$( '.cls-carousel' ).slick({
    arrows: false,
    dots: true
});

/* / Clients */

/* / Slick */

/* Mouse:hover */

/* faces */
$( '.img-wrap' ).mouseenter( function () {
    $( this ).children( '.personal-img' ).css( 'opacity', '.5' );
});

$( '.img-wrap' ).mouseleave( function () {
    $( this ).children( '.personal-img' ).css( 'opacity', '1' );
});
/* / faces */

/* works */
$( '.work-wrap' ).mouseenter( function () {
    $( this ).children( '.work-img' ).css( 'opacity', '.5' );
});

$( '.work-wrap' ).mouseleave( function () {
    $( this ).children( '.work-img' ).css( 'opacity', '1' );
});
/* / works */

/* / Mouse:hover */