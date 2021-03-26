//String o cadena de texto

const tweet = 'Mi nombre es Nicolas Busto y estoy aprendiendo JS'
const producto = 'Monitor HD'

//Length -> Cuantos caractares tiene una string

console.log(tweet.length)
console.log(producto)

//IndexOf --> Encontrar un elemento en una string (retorna posición)

console.log(tweet.indexOf('aprendiendo'))
console.log(producto.indexOf('tablet')) //Dará valor negativo ya que no lo encuentra

//Includes --> Retorna true o false

console.log(tweet.includes('aprendiendo'))
console.log(producto.includes('tablet'))

