var array = [4, 6, 0]
array[3] = 1
array.push(7) // adiciona o  7 como último elemento
/*console.log(array, '\n', array.length, '\n', array.sort())

for (let cont = 0; cont < array.length; cont++) {
    console.log(array[cont])
}
*/
for (let posição in array) {
    console.log(array[posição])
}

console.log(array.indexOf(7)) // procurar pelo valor 7