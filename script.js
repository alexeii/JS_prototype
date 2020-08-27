"use strict";

window.addEventListener("DOMContentLoaded", function () {
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
    newDiv.textContent = prompt("Введите текст нового блока", "Привет");
    newDiv.style.cssText = `height: ${this.height}; 
            width: ${this.width}; 
            background-color: ${this.backgroundColor}; 
            font-size: ${this.fontSize};
            position: absolute`;
    let _right = 0;
    let _top = 0;
    document.addEventListener("keydown", function (event) {
      if (event.key === "ArrowRight") {
        _right += 10;
        newDiv.style.left = _right + "px";
      }
      if (event.key === "ArrowLeft") {
        _right -= 10;
        newDiv.style.left = _right + "px";
      }
      if (event.key === "ArrowDown") {
        _top += 10;
        newDiv.style.top = _top + "px";
      }
      if (event.key === "ArrowUp") {
        _top -= 10;
        newDiv.style.top = _top + "px";
      }
    });
  };
  const domElement = new DomElement("#block", "100px", "100px", "red", "12px");
  domElement.newDiv();
});
