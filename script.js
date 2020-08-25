"use strict";

//window.addEventListener("DOMContentLoaded", function () {
const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.backgroundColor = bg;
  this.fontSize = fontSize;
};
DomElement.prototype.newDiv = function () {
  let newDiv = document.createElement("div");
  if (this.selector[0] === ".") {
    newDiv.className = this.selector;
  } else if (this.selector[0] === "#") {
    newDiv.id = this.selector;
  }
  document.body.prepend(newDiv);
  newDiv.textContent = prompt("Введите текст нового блока", "Привет");
  newDiv.style.cssText = `height: ${this.height}; 
            width: ${this.width}; 
            background-color: ${this.backgroundColor}; 
            font-size: ${this.fontSize}`;
};

const domElement = new DomElement("#block", "100px", "100px", "red", "12px");
//window.addEventListener("DOMContentLoaded", domElement.makeNewDiv, false);
domElement.newDiv();
//});
