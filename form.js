

let inpt1 = document.getElementById("inpt1");
let inpt2 = document.getElementById("inpt2");
let mail= document.getElementById("mail");
let password = document.getElementById("password");
let agregar = document.getElementById("agregar");

function agregarContenido(){
    mail.innerHTML = inpt1.innerHTML;
    

}


agregar.addEventListener('click', agregarContenido);