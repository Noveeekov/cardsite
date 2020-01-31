"use strict";

var dd = document.querySelectorAll('.about-txt article dd');
var p = document.querySelector('.about-txt article p');

function typing(element, printSpeed) {
  'use strict';

  var textBlock = element.innerHTML;
  element.innerHTML = '';
  var i = 0;
  var timer = setInterval(function () {
    if (i < textBlock.length) {
      element.append(textBlock.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, printSpeed);
} // typing(p, 100);
// dd.forEach(function (el) {
//     typing(el, 100);
// });