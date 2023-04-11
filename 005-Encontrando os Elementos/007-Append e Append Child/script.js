"use strict";

const container = document.querySelector(".container");

//container.append("<p>Olá Luiz</p>");

const newdiv = document.createElement("div");
newdiv.innerText = "Olá Luiz";


//container.appendChild("div");

container.appendChild(newdiv);