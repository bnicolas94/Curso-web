//Arrays o arreglos

const numeros = [10,20,30,40,50]


numeros.push(60) //Agrega el dato al FINAL del arreglo (no se recomiendo modificar los arreglos originales)
numeros.unshift(-10,-20,-30) //Agrega el dato al INICIO del arreglo (no se recomiendo modificar los arreglos originales)
console.table(numeros)

const meses = ['Enero','Febrero','Marzo']

meses.pop() //Elimina el ultimo dato del arreglo
meses.shift() //Elimina el primer dato del arreglo

meses.splice(1,1) //Elimina el dato del indice seleccionado 1 = indice | 1 = cantidad de elementos a partir de
console.table(meses)


//REST OPERATOR O SPREAD OPERATOR (asi se debe hacer)

const nuevoArreglo = [
    ...meses,
    'Mayo'
] 

console.table(nuevoArreglo)