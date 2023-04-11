"use strict";

const form = document.forms.namedItem("resgistration");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = form.name.value;
  const password = form.password.value;

  const formData = new formData(form);

  formData.set("name", name);
  formData.set("password", password);

  console.log(formData.has("name"));
  console.lof(formData.has("password"));

  console.log(formData.get("name"));
  console.log(formData.get("password"));

  //DELETE

  formData.delete("name");
  console.log(formData.has("name"));

  // if(name && password) {
  //console.log(name, password);
  //form.submit();
  //}
});