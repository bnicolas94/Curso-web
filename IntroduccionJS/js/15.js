//Array methods

const meses = ['Enero','Febrero','Marzo','Abril','Mayo']

const carrito = [
    {nombre: 'monitor 20 pulgados', precio: 500},
    {nombre: 'televisor 50 pulgadas', precio: 700},
    {nombre: 'tablet 20 pulgados', precio: 300},
    {nombre: 'auriculares', precio: 200},
    {nombre: 'teclado', precio: 50},
    {nombre: 'bocinas', precio: 300},
    {nombre: 'notebook', precio: 800}
]

//forEach -> Se va a ejecutar al menos 1 vez por cada elementos del arreglo

meses.forEach(function(mes){
    if(mes == 'Marzo'){
        console.log('Marzo si existe')
    }
})

//Includes

let resultado = meses.includes('Marzo') //Includes nos muestra true o false si encuentra lo indicado en la cadena de texto
// const resultado2 = carrito.includes('teclado') //Includes no muestra si es un objeto en un arreglo

//**Some -> Ideal para arreglo de objetos */

resultado = carrito.some(function(producto){
    return producto.nombre === 'notebook'
})
console.log(resultado)

//**Reduce -> Para sumar dentro del array con objetos*/

resultado = carrito.reduce(function(total, producto){
    return total +producto.precio
}, 0)



//**Filter -> para filtrar resultados de un array con objetos */

resultado = carrito.filter(function(producto){
    return producto.precio <500
})
resultado = carrito.filter(function(producto){
    return producto.nombre === 'teclado' 
})

console.log(resultado)
