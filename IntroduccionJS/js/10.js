// Objetos

const nombreProducto = 'Monitor 20 pulgadas'
const precio = 300
const disponible = true

const producto = {
    nombreProducto : 'Monitor 20 pulgadas',
    precio : 300,
    disponible : true
}

console.log(producto)
console.log(producto.precio) //Accedo a las propiedades del objeto

//Agergar nuevas propiedades
producto.imagen = 'imagen.jpg'

//Eliminar propiedades
delete producto.disponible
