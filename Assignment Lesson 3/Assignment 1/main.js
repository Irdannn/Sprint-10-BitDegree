"use strict";

const signUpForm = document.querySelector("#signUpForm");
console.log(signUpForm);

signUpForm.addEventListener("mouseenter", function () {
  console.log("User considering sign-up...");
});

signUpForm.addEventListener("mouseleave", function () {
  console.log("User LEFT sign-up ...");
});

const formElements = signUpForm.children;
console.log(formElements);

const fname = signUpForm.fname;
console.log(fname);

const lname = signUpForm.lname;
console.log(lname);

const address1 = signUpForm.address1;
console.log(address1);

const address2 = signUpForm.address2;
console.log(address2);

const userCity = signUpForm.userCity;
console.log(userCity);

const userState = signUpForm.userState;
console.log(userState);

const userPhone = signUpForm.userPhone;
console.log(userPhone);