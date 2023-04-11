"use strict"

const div = document.querySelector("div");

div.setAttribute("class", `${div.getAttribute("class")} active`);
div.setAttribute("id", "name");

div.removeAttribute("id");
console.log(div);
