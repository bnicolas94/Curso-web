//Objetos
const producto = {
    nombreProducto : 'Monitor 20 pulgadas',
    precio : 300,
    disponible : true
}

const medidas = {
    peso: '1kg',
    medida: '1mt'

}

//Las buenas practicas indican que no se deben modificar los objetos originales

const nuevoProducto = {
    ...producto,
    ...medidas
}

console.log(producto)
console.log(nuevoProducto)