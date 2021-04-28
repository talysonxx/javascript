// RETORNA UM VALOR BOOLEANO, ELA FILTRA  OS ELEMENTOS DO ARRAY E GUARDA OS TRUE EM OUTRO ARRAY
const números = [3, 2, 10, 9]
//multiplosDeDois = []
/*for (número of números) {
    if (número % 2 == 0) {
        multiplosDeDois.push(número)
    }
}*/

/*const multiplosDeDois = números.filter(function(número) { 
    if (número % 2 == 0) {
        return true
    } else {
        return false
    }
    //return número % 2 == 0
})*/

const multiplosDeDois = números.filter(números => números % 3 == 0)
console.log(números, 'multiplos de 2', multiplosDeDois)

const arrayMapAndFilter = números.filter(número => número % 2 == 0 ).map(número => número * 10)
console.log(arrayMapAndFilter)