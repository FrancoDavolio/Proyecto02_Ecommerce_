import { Producto } from "./class.js";
import { Usuario } from "./class.js";

let listadeComponentes = [];

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

const modalAdminComponentes = new bootstrap.Modal(document.querySelector("#modalComp"));

btnCrearComp.addEventListener('click', crearComp);
guargarComp.addEventListener('submit', guardarComponente);

function crearComp(){
    modalAdminComponentes.show();
    codigo.value = (uuidv4());
}
// console.log(uuidv4());

function guardarComponente(e){
    e.preventDefault();
    console.log('asdadsa');
}
