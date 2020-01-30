let links = document.querySelectorAll( '.move-link' );
    wnd = window.innerWidth;

function moveLinks () {
    if( wnd > 991 ) {
        let d = 0;
        links.forEach( link => {
            link.classList.add( 'wow', 'bounceInRight');
            link.setAttribute( 'data-wow-duration', '2s' );
            link.setAttribute( 'data-wow-delay', `.${d++}s` );
        });
    }
}

moveLinks();