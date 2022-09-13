import {cantidadCaracteres, validarContraseña} from './validaciones.js';

class Persona {
    constructor(nombreUsuario,email,contraseña){
        this.nombreUsuario=nombreUsuario;
        this.email=email;
        this.contraseña=contraseña;
        
    }}



    let nombreUsuario = document.getElementById("usuario");
let email = document.getElementById("email");
let contraseña = document.getElementById("contraseña");
let formulario = document.getElementById("registro");
let formulario2 = document.getElementById("inicio");

formulario.addEventListener("submit", crearPersona);
nombreUsuario.addEventListener('blur', ()=>{ cantidadCaracteres(nombreUsuario)});
email.addEventListener('blur', ()=>{ cantidadCaracteres(email)});

function crearPersona(e) {
    e.preventDefault();
  
    //volver a validar todos los campos
    if(cantidadCaracteres(nombreUsuario) === true && validarContraseña (contraseña) === true && cantidadCaracteres (email) === true){
      //cuando los datos fueron validos
      console.log("tengo que crear la persona");
      //hay que ocultar el alert
     
      const nuevaPersona = new Persona(
        nombreUsuario.value,
        email.value,
       contraseña.value
       
      );
      console.log(nuevaPersona);
      listaUsuario.push(nuevaPersona);
      //guardar en local storage
      guardarUsuarioEnLocalStorage();
      console.log(listaUsuario)
      window.location.href = 'http://127.0.0.1:5500/Proyecto02_Ecommerce_TecnoRolling/pages/admin.html'
      //reseteo los datos del formulario 
      registro.reset();
     
      
    }else{
      
    }
    
  }
  

  function guardarUsuarioEnLocalStorage() {
    localStorage.setItem("listaUsuarioKey", JSON.stringify(listaUsuario));
  }

  //aqui voy a guardar todas las peliculas
let listaUsuario =
JSON.parse(localStorage.getItem("listaUsuarioKey")) || [];
