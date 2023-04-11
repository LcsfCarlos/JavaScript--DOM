"use strit";

/**
 * TextContent => Retorna o texto COM formatações, mas sem os elementos HTML.
 * innerText => Retorna somente o texto, sem formatações e elementos HTML.
 * **/

const p = document.querySelector("p");

console.log(p.textContent);
console.log(p.innerText);

p.textContent = "Luiz Carlos";