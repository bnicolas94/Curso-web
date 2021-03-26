"use strict" //Correr JS en modo estricto
//Objetos
const producto = {
    nombreProducto : 'Monitor 20 pulgadas',
    precio : 300,
    disponible : true
}

Object.freeze(producto) // No permite modificaciones en el objeto de ningun tipo
Object.seal(producto) //No permite modificaciones al objeto, salvo editar valores
producto.imagen = 'imagen.jpg'

console.log(producto)