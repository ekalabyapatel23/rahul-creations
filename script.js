"use strict";
const opens = document.querySelector(".open");
const closes = document.querySelector(".close");

const header = document.querySelector(".header");
opens.addEventListener("click", function () {
  header.classList.add("heder-open");
});

closes.addEventListener("click", function () {
  header.classList.remove("heder-open");
});

// Smooth scrolling animation

const allLinks = document.querySelector("a:link");
const navlist = document.querySelectorAll(".nav-list");

for (let i = 0; i < navlist.length; i++) {
  navlist[i].addEventListener("click", function () {
    header.classList.toggle("heder-open");
  });
}

// Flexbox

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
