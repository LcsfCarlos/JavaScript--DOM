"use strict";

/**
 * innerHtml => Retorna um texto, COM formatações e COM elementos HTML.
 * createElement => Cria um elemento HTML
 */

const div = document.querySelector("div");
//console.log(1, div);
//div.innerHTML = `${div.innerHTML}"<strong>Esse é meu texto alterado</strong>"`;
//console.log(2, div);

const elementUL = document.createElement("ul");

[1, 2, 3].forEach((element) => {
  const elementLi = document.createElement("li");
  elementLi.innerText = element;
  elementUL.appendChild(elementLi);
});

div.appendChild(elementUL);