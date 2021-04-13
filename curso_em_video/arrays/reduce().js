var arrayNumeros = [10, 20, 30]
/*var soma = 0

for (posição in arrayNumeros) {
    soma += arrayNumeros[posição]
}

console.log(soma)*/


// usando reduce
var arrayReduzido = arrayNumeros.reduce(function (soma, numero) {
    return soma += numero
}, 0)
console.log(arrayReduzido)