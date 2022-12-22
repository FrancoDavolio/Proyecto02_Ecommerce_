export function cantidadCaracteres(input) {
  if (input.value.length >= 3 && input.value.length <= 50) {
    input.className = 'form-control is-valid'
    return true
  } else {
    input.className = 'form-control is-invalid'
    return false
  }
}
export function validarContraseña(input) {
  if (input.value.length >= 6 && input.value.length <= 12) {
    input.className = 'form-control is-valid'
    return true
  } else {
    input.className = 'form-control is-invalid'
    return false
  }
}
