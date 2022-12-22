export function validarCodigo(input) {
  if (input.value == input.value) {
    input.className = 'form-control is-valid'
    return true
  } else {
    input.className = 'form-control is-invalid'
    return false
  }
}

export function validarNombre(input) {
  if (input.value.length >= 3 && input.value.length <= 80) {
    input.className = 'form-control is-valid'
    return true
  } else {
    input.className = 'form-control is-invalid'
    return false
  }
}

export function validarDescripcion(input) {
  if (input.value.length >= 3 && input.value.length <= 600) {
    input.className = 'form-control is-valid'
    return true
  } else {
    input.className = 'form-control is-invalid'
    return false
  }
}

export function validarUrl(input) {
  let patron = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
  if (patron.test(input.value)) {
    input.className = 'form-control is-valid'
    return true
  } else {
    input.className = 'form-control is-invalid'
    return false
  }
}

export function validarPrecio(input) {
  if (input.value.length >= 1 && input.value.length <= 80) {
    input.className = 'form-control is-valid'
    return true
  } else {
    input.className = 'form-control is-invalid'
    return false
  }
}

export function validarStock(input) {
  if (input.value.length >= 1 && input.value.length <= 80) {
    input.className = 'form-control is-valid'
    return true
  } else {
    input.className = 'form-control is-invalid'
    return false
  }
}

export function validarCategoria(input) {
  if (input.value == input.value) {
    input.className = 'form-control is-valid'
    return true
  } else {
    input.className = 'form-control is-invalid'
    return false
  }
}
