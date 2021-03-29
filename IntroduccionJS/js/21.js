const carrito = [
    {nombre: 'monitor 20 pulgados', precio: 500},
    {nombre: 'televisor 50 pulgadas', precio: 700},
    {nombre: 'tablet 20 pulgados', precio: 300},
    {nombre: 'auriculares', precio: 200},
    {nombre: 'teclado', precio: 50},
    {nombre: 'bocinas', precio: 300},
    {nombre: 'notebook', precio: 800}
]


//ForEach --> IMPORTANTE*** SIRVE SOLO PARA MOSTRAR EN CONSOLA O HTML- Unicamente en arreglos/arrays * se ejectura 1 vez por cada elemeno que exista


carrito.forEach(producto => console.log(producto.nombre));

//Map ---> IMPORTANTE*** SIRVE PARA CREAR NUEVOS ARREGLOS- Unicamente en arreglos/arrays * se ejectura 1 vez por cada elemeno que exista

carrito.map(producto => console.log(producto.nombre));
