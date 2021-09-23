const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// const valorInicialAcumulador = 0
// let sumArr = arr.reduce((acumulador, elemento) => acumulador+=elemento, valorInicialAcumulador)
// console.log(sumArr)


// let somaArr = 0
// function Reduce() {
//   for (elemento of arr) {
//     somaArr += elemento
//   }

//   return somaArr
// }

// console.log(Reduce())




const newArr = []
// function 掛け算() {
//   for (elemento of arr) {
//     newArr.push(elemento * 2)
//   }

//   return newArr
// }

// console.log(掛け算())


// const newArr = arr.map(elemento => elemento * 2)
// console.log(newArr)

// function multiDe3() {
//   for (elemento of arr) {
//     if (elemento % 3 == 0) {
//       newArr.push(elemento)
//     }
//   }

//   return newArr
// }
// console.log(multiDe3())

const multiDe3 = arr.filter(elemento => elemento % 3 == 0) 
console.log(multiDe3)