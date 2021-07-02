var array = ['primeiro', 'segundo', 'terceiro', 'quarto']
console.log(array.pop()) // retira e retorna o último valor do array
console.log(array.push('último'))
// unshit adicina o elemento no inicio e retorna o valor
console.log(array.unshift('abacate'))
console.log(array)
// remove no início e retorna quem removeu
console.log(array.shift())
console.log(array)

// juntando arrays
const outroArray = [0, 'lula']
const novoArray = array.concat(outroArray)
console.log(novoArray)

// fatia o array em um novo array
const arr = [1, 2, 3, 4, 5]
console.log(arr.slice(0, 2))
//  -3 = pega três posições a partir da última
console.log(arr.slice(-1), arr.slice(-3))

// splice altera um array adicionando novos elementos enquanto remove elementos antigos
// a partir da segundo posição, vai remover (altera o array origianl)
arr.splice(2)
console.log(arr)
// adicionando com splice
// adiciona na primeira posição (0), não remove nada (0), adiciona o 'first
arr.splice(0, 0, 'first', 'teceiro')
console.log(arr)
