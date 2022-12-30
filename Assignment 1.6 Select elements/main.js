"use strict"

const elements = document.getElementsByTagName("div");
console.log(elements);

const ID = document.getElementById("container_1");
console.log(ID);

const class1 = document.getElementsByClassName("text");
console.log(class1);

let queryElementID = document.querySelector("#container_2");
console.log(`This is the ONLY element that has the ID of "container_2":`);
console.log(queryElementID);

let class2 = document.querySelector(".text");
console.log(class2);

let class3 = document.querySelectorAll(".text");
console.log(class3);