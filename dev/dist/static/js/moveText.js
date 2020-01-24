const scene = new Scene({
  ".cvs-container": {}
}, {
  selector: true,
}),
      item = scene.getItem(".cvs-container");

function move(startTime, endTime, left, top, rotate, scale) {
  item.set({
    [`${startTime}, ${endTime}`]: Scene.kineticFrame({
      left: `${left}px`,
      top: `${top}px`
    }).set({
      transform: {
        rotate: `${rotate}deg`,
        scale,
      }
    }),
  });
}

move(0, 0, 134, 125, 0, 5); // frontend =
move(1.2, 1.5, 28, 125, 0, 1); // =======
move(2.5, 3, -130, 89.5, -90, 2); // html =
move(4, 5, -90, 58.5, -90, 3); // css =
move(6, 6, 43, 82, 0, 0.5); // java-script =
move(7.5, 8, 43, 82, 0, 1.1); // ==========
move(9, 10, 96, 39, 0, 2); // jquery =
move(11, 12, -10.5, 39, 0, 3); // sass =
move(13, 14.5, -35, -2, 0, 1.05); // bts =
move(15, 16.5, -15, -52, 0, 0.9); // fdn =
move(18, 19, 118, 1, 0, 3.7); // svg =
move(20, 21, 90.4, -95, 0, 2.05); // canvas =
move(22, 23, -118.3, -91, 0, 3.7); // and =
move(24, 25.5, -25, -128, 0, 0.97); // animation =
move(26, 27, 0, 0, 0, 1); // all =

scene.set({
  "[data-type='fnd']": Scene.typing({ text: "Frontend", duration: 1.2}),
  "[data-type='html']": {
    2.5: Scene.typing({ text: "HTML", duration: 0.4}),
  },
  "[data-type='css']": {
    4: Scene.typing({ text: "CSS", duration: 0.3}),
  },
  "[data-type='js']": {
    6: Scene.typing({ text: "Java-Script", duration: 1.5}),
  },
  "[data-type='jq']": {
    9: Scene.typing({ text: "Jquery", duration: 1}),
  },
  "[data-type='sass']": {
    11: Scene.typing({ text: "SASS", duration: 0.4}),
  },
  "[data-type='bts']": {
    13: Scene.typing({ text: "Bootstrap", duration: 1.3}),
  },
  "[data-type='fdt']": {
    15: Scene.typing({ text: "Foundation", duration: 1.4}),
  },
  "[data-type='svg']": {
    18: Scene.typing({ text: "SVG", duration: 0.3}),
  },
  "[data-type='cvs']": {
    20: Scene.typing({ text: "Canvas", duration: 1}),
  },
  "[data-type='and']": {
    22: Scene.typing({ text: "and", duration: 0.3}),
  },
  "[data-type='anm']": {
    23: Scene.typing({ text: "Animation", duration: 1.3}),
  },
});

scene.setPlaySpeed(1);
scene.setEasing("ease-in-out");
scene.setIterationCount("infinite");
scene.play();