const producto = {
    nombreProducto : 'Monitor 20 pulgadas',
    precio : 300,
    disponible : true
}

//Forma anterior
const precioProducto = producto.precio
const nombreProducto = producto.nombreProducto

// console.log(precioProducto)
// console.log(nombreProducto)

//Destructuring

const {precio, nombreProducto} = producto //Asigna variable igual al nombre de la propiedad del objeto

console.log(precio)