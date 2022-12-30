const form = document.querySelector("#signUpForm");
console.log(form);

const formElements = form.children;
console.log("Here's the form.children elements:");
console.log(formElements);


const fName = form.children.fname;
const lName = form.children.lName;
const address1 = form.children.address1;
const address2 = form.children.address2;
const userCity = form.children.userCity;
const userState = form.children.userState;
const userPhone = form.children.userPhone;

form.addEventListener("mouseenter", function () { console.log("User considering sign-up ..."); });

form.addEventListener("mouseleave", function () { console.log("User LEFT sign-up ..."); });

fName.addEventListener("mouseenter", function() { console.log("User considering first name field..."); });
lName.addEventListener("mouseenter", function() { console.log("User considering last name field..."); });
address1.addEventListener("mouseenter", function() { console.log("User considering address1 field..."); });
address2.addEventListener("mouseenter", function() { console.log("User considering address2 field..."); });
userCity.addEventListener("mouseenter", function() { console.log("User considering city field..."); });
userState.addEventListener("mouseenter", function() { console.log("User considering state field..."); });
userPhone.addEventListener("mouseenter", function() { console.log("User considering phone number field..."); });

fName.addEventListener("mouseout", function() { console.log("User Left first name field..."); });
lName.addEventListener("mouseout", function() { console.log("User Left last name field..."); });
address1.addEventListener("mouseout", function() { console.log("User Left address1 field..."); });
address2.addEventListener("mouseout", function() { console.log("User Left address2 field..."); });
userCity.addEventListener("mouseout", function() { console.log("User Left city field..."); });
userState.addEventListener("mouseout", function() { console.log("User Left state field..."); });
userPhone.addEventListener("mouseout", function() { console.log("User Left phone number field..."); });

fName.onclick = function () {
    console.log("User **SELECTED** first name field...");
    fName.setAttribute("style", "color:white; background:black");
  };
  lName.onclick = function () {
    console.log("User **SELECTED** last name field...");
    lName.setAttribute("style", "color:white; background:black");
  };
  address1.onclick = function () {
    console.log("User **SELECTED** address1 field...");
    address1.setAttribute("style", "color:white; background:black");
  };
  address2.onclick = function () {
    console.log("User **SELECTED** address2 field...");
    address2.setAttribute("style", "color:white; background:black");
  };
  userCity.onclick = function () {
    console.log("User **SELECTED** city field...");
    userCity.setAttribute("style", "color:white; background:black");
  };
  userState.onclick = function () {
    console.log("User **SELECTED** state field...");
    userState.setAttribute("style", "color:white; background:black");
  };
  userPhone.onclick = function () {
    console.log("User **SELECTED** phone field...");
    userPhone.setAttribute("style", "color:white; background:black");
  };

  fName.onblur = function () {
    fName.setAttribute("style", "color:grey; background:white; border-color:red;");
  };
  lName.onblur = function () {
    lName.setAttribute("style", "color:grey; background:white; border-color:red;");
  };
  address1.onblur = function () {
    address1.setAttribute("style", "color:grey; background:white; border-color:red;");
  };
  address2.onblur = function () {
    address2.setAttribute("style", "color:grey; background:white; border-color:red;");
  };
  userCity.onblur = function () {
    userCity.setAttribute("style", "color:grey; background:white; border-color:red;");
  };
  userState.onblur = function () {
    userState.setAttribute("style", "color:grey; background:white; border-color:red;");
  };
  userPhone.onblur = function () {
    userPhone.setAttribute("style", "color:grey; background:white; border-color:red;");
  };