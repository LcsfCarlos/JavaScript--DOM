"use strict";

const menu = document.querySelector("#menu");
// if(menu){
// Usa o if ? ou Joga todo o código aqui
//}
menu?.addEventListener("click", (event) => {
  const { target } = event;
  const body = document.querySelector("body");

  switch (target.getAttribute("class")) {
    case "home":
      body.style.background = "blue";
      break;

    case "sobre":
      body.style.background = "red";
      break;

    case "contato":
      body.style.background = "pink";
      break;
  }
});
