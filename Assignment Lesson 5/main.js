"use strict";

const grandParent = document.querySelector(".grand-parent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const grandChild = document.querySelectorAll(".grand-child");

console.log("grandParent");
console.log("parent");
console.log("child");
console.log("grandChild");

parent.addEventListener("click", (event) => {
    if (event.target.classList.contains("grand-child")) {
        event.target.classList.toggle("red");
    }
});

parent.addEventListener('click', (event) => {
    event.target.classList.toggle("red");
    event.stopPropagation();
  });
  
  child.addEventListener('click', (event) => {
    event.stopPropagation()
  });