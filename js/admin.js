import { Producto } from "./class.js";
import {
  validarCodigo,
  validarNombre,
  validarDescripcion,
  validarUrl,
  validarPrecio,
  validarCategoria,
  validarStock,
} from "./helpers.js";

let listadeComponentes =
  JSON.parse(localStorage.getItem("listaComponentesKey")) || [];

//traer los input
let codigo = document.querySelector("#codigo");
let nombre = document.querySelector("#nombre");
let descripcion = document.querySelector("#descripcion");
let imagen = document.querySelector("#imagen");
let precio = document.querySelector("#precio");
let stock = document.querySelector("#stock");
let categoria = document.querySelector("#categoria");
let formComponentes = document.querySelector("#formComponentes");
let guargarComp = document.querySelector("#guargarComp");
let btnCrearComp = document.querySelector("#btnCrearComp");
let tBody = document.querySelector("#tBodyTabla");

const modalAdminComponentes = new bootstrap.Modal(
  document.querySelector("#modalComp")
);

btnCrearComp.addEventListener("click", crearComp);
formComponentes.addEventListener("submit", guardarComponente);

function crearComp() {
  modalAdminComponentes.show();
  codigo.value = uuidv4();
}
// console.log(uuidv4());

codigo.addEventListener("blur", () => {
  validarCodigo(codigo);
});
nombre.addEventListener("blur", () => {
  validarNombre(nombre);
});
descripcion.addEventListener("blur", () => {
  validarDescripcion(descripcion);
});
imagen.addEventListener("blur", () => {
  validarUrl(imagen);
});
precio.addEventListener("blur", () => {
  validarPrecio(precio);
});
stock.addEventListener("blur", () => {
  validarStock(stock);
});
categoria.addEventListener("blur", () => {
  validarCategoria(categoria);
});

function guardarComponente(e) {
  e.preventDefault();
  if (
    validarCodigo(codigo) === true &&
    validarNombre(nombre) === true &&
    validarDescripcion(descripcion) === true &&
    validarUrl(imagen) === true &&
    validarPrecio(precio) === true &&
    validarStock(stock) === true &&
    validarCategoria(categoria) === true
  ) {
    let nuevoProducto = new Producto(
      codigo.value,
      nombre.value,
      descripcion.value,
      imagen.value,
      precio.value,
      stock.value,
      categoria.value
    );
    console.log(Producto);
    listadeComponentes.push(nuevoProducto);
    limpiarFormulario();
    console.log(listadeComponentes);
    modalAdminComponentes.hide();
    localStorage.setItem(
      "listaComponentesKey",
      JSON.stringify(listadeComponentes)
    );
  }
}

function limpiarFormulario() {
  formComponentes.reset();
}

console.log("lista", listadeComponentes);

tBody.innerHTML = listadeComponentes.map(
  (product) =>
    `<tr>
    <th scope="row">${product.codigo}</th>
    <td>${product.nombre}</td>
    <td>${product.descripcion}</td>
    <td>${product.imagen}</td>
    <td>${product.stock}</td>
    <td>${product.categoria}</td>
    <td>${product.precio}</td>
    <td>

    <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal${product.codigo}">
    <i class="bi bi-pencil-square"></i>
    </button>
    
   
    <div class="modal fade" id="exampleModal${product.codigo}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modificar Producto</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <div class="modal-body">
          <form id="formComponentes${product.codigo}">
              <div class="mb-3">
                  <label for="codigo" class="form-label">Codigo</label>
                  <input 
                  id="codigoModalMod" 
                  type="text" 
                  class="form-control" 
                  value="${product.codigo}"
                  disabled>
              </div>
              <div class="mb-3">
                  <label for="nombre">Nombre</label>
                  <input 
                  id="nombreModalMod"
                  type="text" 
                  class="form-control" 
                  value="${product.nombre}"
                  placeholder="Ej: Placa de video">
              </div>
              <div class="mb-3">
                      <label for="descripcion">Descripcion</label>
                  <textarea
                  id="descripcionModalMod" 
                  rows="4"
                  class="form-control"
                  placeholder="Ej: Lorem ipsum dolor sit amet."
                  maxlength="200"
                  minlength="2"
                 
                      >${product.descripcion}</textarea>
              </div>
              <div class="mb-3">
                  <label for="imagen">Imagen</label>
                  <input 
                  id="imagenModalMod"
                  type="text" 
                  class="form-control" 
                  placeholder="Ej: https://direccionImagenUrl.png"
                  maxlength="120"
                  minlength="2"
                  value="${product.imagen}"
                  />
              </div>
              <div class="mb-3">
                  <label for="precio">Precio</label>
                  <input 
                  id="precioModalMod" 
                  type="text"
                  class="form-control" 
                  value="${product.precio}"
                  placeholder="$123">
              </div>
              <div class="mb-3">
                  <label for="stock">Stock</label>
                  <input 
                  id="stockModalMod" 
                  type="text" 
                  class="form-control" 
                  value="${product.stock}"
                  placeholder="1">
              </div>
              <div class="mb-3">
                  <label for="categoria">Categoria</label>
                  <select id="categoriaModalMod" class="form-control">
                      <option value="loElegido">${product.categoria}</option>
                      <option value="placaDeVideo">Placa De Video</option>
                      <option value="placaMadre">Placa Madre</option>
                      <option value="microprocesador">Microprocesador</option>
                      <option value="camaras">Camara</option>
                      <option value="sillas">Sillas</option>
                      <option value="mouses">Mouses</option>
                      <option value="monitores">Monitores</option>
                      <option value="auriculares">Auriculares</option>
                      <option value="teclados">Teclados</option>
                      <option value="gabinetes">Gabinetes</option>
                      <option value="almacenamientos">Almacenamiento</option>
                      <option value="memoriasRam">Memorias Ram</option>
                      <option value="microfonos">Microfonos</option>
                      <option value="fuentes">Fuentes</option>
                      <option value="notebooks">Notebooks</option>
                  </select>
              </div>
             
          </form>
      </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary"onclick='modificar("${product.codigo}")'>Aceptar</button>
          </div>
        </div>
      </div>
    </div>
        
    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal1${product.codigo}">
    <i class="bi bi-x-square"></i>
    </button>

    <div class="modal fade" id="exampleModal1${product.codigo}" tabindex="-1" aria-labelledby="exampleModalLabel${product.codigo}" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel${product.codigo}">¿Seguro que queres eliminar al ID: ${product.codigo}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
    
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-danger" onclick='borrarProducto("${product.codigo}")'>Borrar</button>
        </div>
        </div>
    </div>
    </div>


    </td>

    </tr>`
);

window.borrarProducto = function (codigo) {
  let compFiltrado = listadeComponentes.filter(
    (componente) => componente.codigo != codigo
  );
  console.log(compFiltrado);
  localStorage.setItem("listaComponentesKey", JSON.stringify(compFiltrado));
  location.href = "https://componentecompu.netlify.app/pages/admin.html";
};

window.modificar = function (codigo) {
  let nombreModal = document.querySelector("#nombreModalMod").value;
  let descripcionModal = document.querySelector("#descripcionModalMod").value;
  let imagenModal = document.querySelector("#imagenModalMod").value;
  let precioModal = document.querySelector("#precioModalMod").value;
  let stockModal = document.querySelector("#stockModalMod").value;
  let categoriaModal = document.querySelector("#categoriaModalMod").value;

  const arrayProd = [];

  for (let i = 0; i < listadeComponentes.length; i++) {
    const producto = listadeComponentes[i];

    if (producto.codigo === codigo) {
      const newObj = {
        codigo,
        categoria: categoriaModal,
        descripcion: descripcionModal,
        imagen: imagenModal,
        nombre: nombreModal,
        precio: precioModal,
        stock: stockModal,
      };
      arrayProd.push(newObj);
    } else {
      arrayProd.push(producto);
    }
  }

  localStorage.removeItem("listaComponentesKey");
  localStorage.setItem("listaComponentesKey", JSON.stringify(arrayProd));
  window.location.href = "https://componentecompu.netlify.app/pages/admin.html";
};
