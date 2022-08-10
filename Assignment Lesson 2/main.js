"use strict"

const companyBlurb = document.querySelector("#company-blurb");
companyBlurb.innerText = "Thankyou for using our code, plase visit us again.";

console.log(companyBlurb);

const navBar = document.querySelector("#navBar");
console.log(navBar);
console.log(navBar.children);

const childrenNavbar = navBar.children;
console.log(childrenNavbar.length);

for (let i = childrenNavbar.length - 1; i >= 0; i--) {
  console.log(`Here is the element of the childrenNavbar`);
  console.log(childrenNavbar[i]);
  childrenNavbar[i].remove();
}

const MenuItem = [
  "Home",
  "About Me",
  "Portfolio",
  "Tech Blog",
  "YouTube Channel",
  "Other Social Media",
  "Coding Meme of the Day",
];

for (let item of MenuItem) {
  const newItem = document.createElement("li");
  newItem.innerText = item;
  console.log(newItem);
  navBar.appendChild(newItem);
}