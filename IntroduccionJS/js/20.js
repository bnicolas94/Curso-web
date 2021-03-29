//For Loop
for(let i = 0; i < 10; i++){
    console.log(i)
}
for(let i = 0; i <= 100; i++){
    if(i % 2==0){ //--> Para saber si es par
        console.log(`El numero ${i} es PAR`)
    }
}

const carrito = [
    {nombre: 'monitor 20 pulgados', precio: 500},
    {nombre: 'televisor 50 pulgadas', precio: 700},
    {nombre: 'tablet 20 pulgados', precio: 300},
    {nombre: 'auriculares', precio: 200},
    {nombre: 'teclado', precio: 50},
    {nombre: 'bocinas', precio: 300},
    {nombre: 'notebook', precio: 800}
]

for(let i = 0; i < carrito.length; i++){
    console.log(carrito[i].nombre)
}

//While Loop ---> IMPORTANTE*** PRIMERO EVALUA LA CONDICION Y LUEGO EJECUTA EL CODIGO

let i = 0;

while(i < 10) {
    console.log(i);
    i++;
}

//Do While Loop -----> IMPORTANTE**** PRIMERO EJECUTA 1 VEZ EL CODIGO Y LUEGO EVALÚA

let x = 1

do{
    console.log(x)
    x++
}while(x < 10)
