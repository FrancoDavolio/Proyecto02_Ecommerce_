import { cantidadCaracteres, validarContraseña } from './validaciones.js'

class Persona {
  constructor(nombreUsuario, email, contraseña) {
    this.nombreUsuario = nombreUsuario
    this.email = email
    this.contraseña = contraseña
  }
}
let nombreUsuario = document.getElementById('usuario')
let email = document.getElementById('email')
let contraseña = document.getElementById('contraseña')
let formulario = document.getElementById('registro')
let formulario2 = document.getElementById('inicio')

formulario.addEventListener('submit', crearPersona)
nombreUsuario.addEventListener('blur', () => {
  cantidadCaracteres(nombreUsuario)
})
email.addEventListener('blur', () => {
  cantidadCaracteres(email)
})

function crearPersona(e) {
  e.preventDefault()
  if (
    cantidadCaracteres(nombreUsuario) === true &&
    validarContraseña(contraseña) === true &&
    cantidadCaracteres(email) === true
  ) {
    const nuevaPersona = new Persona(
      nombreUsuario.value,
      email.value,
      contraseña.value,
    )
    listaUsuario.push(nuevaPersona)
    guardarUsuarioEnLocalStorage()
    window.location.href = window.location.origin + '/pages/admin.html'
    registro.reset()
  } else {
  }
}

function guardarUsuarioEnLocalStorage() {
  localStorage.setItem('listaUsuarioKey', JSON.stringify(listaUsuario))
}
let listaUsuario = JSON.parse(localStorage.getItem('listaUsuarioKey')) || []
