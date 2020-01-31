"use strict";

var bcg = document.querySelector('.title');
var currentColor = [255, 255, 255];
var currentStep = 0;
var oldTime = 0;
var steps = 100;
var delta = 69;

function getRandomColor() {
  'use strict';

  var color = [];

  for (var i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 255));
  }

  return color;
}

var nextColor = getRandomColor();

function changeColor() {
  'use strict';

  currentStep++;
  bcg.style.backgroundColor = 'rgb( ' + currentColor.map(function (e, i) {
    return Math.floor(e + (nextColor[i] - e) * currentStep / steps);
  }).join(', ') + ')';

  if (currentStep == 100) {
    currentStep = 0;
    currentColor = nextColor;
    nextColor = getRandomColor();
  }
}

var animate = function animate(currentTime) {
  'use strict';

  if (oldTime === 0) {
    oldTime = currentTime;
  }

  if (currentTime - oldTime >= delta) {
    changeColor();
    oldTime = currentTime;
  }

  requestAnimationFrame(animate);
};

requestAnimationFrame(animate);