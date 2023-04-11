const container = document.querySelector(".container");

const newP = document.createElement("p");
newP.innerText = "Olá Luiz";

container.before("Luiz Carlos");
container.after(newP);