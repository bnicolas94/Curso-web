///Arrow functions
/*const sumar = function(n1,n2){
    console.log(n1 + n2)
}*/
const sumar = (n1,n2) => console.log(n1 + n2)

sumar(5,12);

const aprendiendo = (tecnologia) =>{
    console.log(`Aprendiendo ${tecnologia}`)
}
aprendiendo('JavaScript')

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

meses.forEach(mes => {
    if(mes == 'Marzo'){
        console.log('Marzo si existe')
    }
})

let resultado
//**Some -> Ideal para buscar en arreglo de objetos */
resultado = carrito.some(p => p.nombre === 'notebook') //--> El return se da implicito

//**Reduce -> Para sumar dentro del array con objetos*/
resultado = carrito.reduce((total, producto) => total + producto.precio, 0)

//**Filter -> para filtrar resultados de un array con objetos */
resultado = carrito.filter(producto => producto.precio < 500)

resultado = carrito.filter(producto => producto.nombre !== 'teclado')
console.log(resultado)
