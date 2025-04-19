const btnEnviar = document.getElementById("btnEnviar");

const cuerpo = document.getElementById("body");

const clave = document.querySelector("#pass");

const nombre = document.getElementById("nombre");

const resultado = document.querySelector("#resultado");
let suma = 20 + 20;
btnEnviar.addEventListener('click', function(){
    alert("HOLA BIENVENIDO A MI PAGINA" + nombre.value)
    cuerpo.style.background = "red";
    clave.type = "text";
    resultado.innerHTML = suma;
});