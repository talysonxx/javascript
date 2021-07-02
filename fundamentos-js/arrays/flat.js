const arr = [10, 32, ['lula', 12, ['brasil novo', 96]]]
// objetivo => [10, 32, 'lula', 12, 'brasil novo', 96]
// arr.flat(1); 1 = um índice de profundidade, e assim por diante 
console.log(arr.flat(1))
console.log(arr.flat(2))
console.log(arr)

// procura o primeira valor que satisfaça a condição e retorna
const arr2 = [1, 4, 99]
console.log(arr2.find(value => value % 3 == 0))
// também tem o findIndex, que retorna o índice e não o valor do array em si

// retorna o primeiro índice em que um elemento pode ser encontrado no array
const girls = ['Bruna', 'Bianca', 'Fernanda', 'Bianca', 'Júlia', 'Fernanda']
console.log(`O índice é: ${girls.indexOf('Fernanda')}`)
// semelhante, o lastIndexOf retorna o última ocorrência

// saber se um item está em um determinado array
console.log(girls.includes('Gabriela'), ',' ,girls.includes('Júlia'))

// retorna true ou false, se pelo menos um item satisfaz a condição (.some())
const students = [
    {name: 'Júlia', age: 19},
    {name: 'Dália', age: 16},
    {name: 'Tlysa', age: 19}
]
console.log(students.some(value => value.age >= 18))
// parecido, o every verifica se todos satisfazem a condição

// .reverse(), inverte a ordem