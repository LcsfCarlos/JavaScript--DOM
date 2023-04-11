"use strict";

const container = document.querySelector(".container");
const paragrafo = document.querySelector("paragrafo");

const novoH2 = document.createElement("h2");
const newdiv = document.createElement("div");

novoH2.innerText = "Olá Luiz Carlos";

container.insertBefore(newdiv, paragrafo);
console.log(newdiv);

newdiv.style.background = "red";
newdiv.style.width = 30;
newdiv.insertBefore(novoH2, paragrafo);