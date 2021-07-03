var multiplicar = (...rest) => rest.reduce((valorAcumulado, value) => valorAcumulado * value, 1) 

const somaReduce = (...args) => multiplicar(...args)
// pode ser usado em string, arrays e objectes
console.log(somaReduce(10, 10, 10, 10))

// método tradicional
const mult = (...rest1) => rest1.reduce((valorAcumulador, value) => valorAcumulador * value, 1)

const sum = (...rest2) => mult.apply(undefined, rest2)
console.log(sum(2, 2, 2))

// com strings
const str = 'Bolsonaro Uzumaki'
function quebrarString(...args){
    console.log(args)
    console.log(arguments)
}
quebrarString(...str)