"use strict";
//document.addEventListener("DOMContentLoaded", domElement.newDiv);
const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.backgroundColor = bg;
  this.fontSize = fontSize;
};
DomElement.prototype.newDiv = function () {
  let newDiv = document.createElement("div");
  let name = this.selector.slice(1);
  if (this.selector[0] === ".") {
    newDiv.className = name;
  } else if (this.selector[0] === "#") {
    newDiv.id = name;
  }
  document.body.prepend(newDiv);
  //newDiv.textContent = prompt("Введите текст нового блока", "Привет");
  newDiv.style.cssText = `height: ${this.height}; 
            width: ${this.width}; 
            background-color: ${this.backgroundColor}; 
            font-size: ${this.fontSize};
            position: absolute`;

  document.addEventListener("keydown", function (event) {
    console.log(event);
    switch (event.code) {
      case "ArrowRight":
        newDiv.style.left += 10 + "px";
        break;
      case "ArrowLeft":
        newDiv.style.right += 10 + "px";
      //break;
    }
  });
};
const domElement = new DomElement("#block", "100px", "100px", "red", "12px");

domElement.newDiv();
