"use strict";

const $box1 = $("#box1");
const $box2 = $("#box2");

$("#box1").dblclick(function (e) {
    console.log("JQuery was used on a double-click!");
    const element = e.target;
    if (element.style.fontSize == "100px") {
      element.style.fontSize = "45px"
    } else { element.style.fontSize = "100px" };
});

$("#box2").mouseenter(function (e) {
    const element = e.target;
    console.log(element);
    if (element.style.color == "black") {
      element.style.color = "red"
    } else { element.style.color = "black" };
  });

  $("#box2").mouseleave(function (e) {
    const element = e.target;
    console.log(element);
    if (element.style.borderColor == "red") {
      element.style.borderColor = "black"
    } else { element.style.borderColor = "red" };
  });