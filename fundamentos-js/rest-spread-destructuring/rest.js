// rest operator
// uma função receber ilimitados argumentos
function somaReduce(...args){
    return args.reduce((valorTotal, argumento) => valorTotal + argumento, 0)
}
// mesma coisa, só que usando o .map()
var somaMap1 = 0
function somaMap(...args){
    return args.map(value => somaMap1 += value)
}

console.log(somaReduce(10, 20, 30))
console.log(somaMap(10, 20, 30)[(somaMap(10, 20, 30).length) - 1])