let dd = document.querySelectorAll('.about-txt article dd');
let p = document.querySelector('.about-txt article p');

function typing(element, printSpeed) {
    'use strict';

    let textBlock = element.innerHTML;
    element.innerHTML = '';

    let i = 0;
    let timer = setInterval(function () {
        if(i < textBlock.length) {
            element.append(textBlock.charAt(i));
            i++;
        } else {
            clearInterval(timer);
        }
    }, printSpeed);
}

// typing(p, 100);

// dd.forEach(function (el) {
//     typing(el, 100);
// });
