// for each = para cada ... (num array)
// const array = [0, 2, 4, 6, 9]
// array.forEach(numero, index => console.log(numero * 3))

const outroArray = [0, 2, 3, 4]
// o primeiro parâmetro indica os valores do array, o segundo indica a posição do valor no array (o terceiro indica o array)
outroArray.forEach((value, index) => console.log(`valor: ${value} na posição: ${index}`))