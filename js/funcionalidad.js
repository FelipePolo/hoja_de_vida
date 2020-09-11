let metodo = document.getElementById("metodo");
let formulario = document.getElementById("formulario");

metodo.addEventListener("change",(event) => {
  formulario.setAttribute("method",event.target.value); 
  console.log(formulario.attributes);
})

