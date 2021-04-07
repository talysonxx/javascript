window.document.querySelector('input#adicionar').addEventListener('click', adicionar)
window.document.querySelector('input#cadastrar').addEventListener('click', cadastrar)

var resultado = window.document.querySelector('div#res')
var flista = window.document.querySelector('select#flista')
var array = []

function adicionar() {
    resultado.innerHTML = ''
    var número = Number(window.document.querySelector('input#fnum').value)

    if (número <= 0 || número > 100) {
        window.alert(`${número == 0 ? 'Digite um valor' : 'Digite um valor válido'}`)
    } else {
        if (array.indexOf(número) != -1) {
            window.alert('Valor já incluso')
        } else {
                array.push(número)
                
                var option = window.document.createElement('option')
                option.text = número
                option.value = número
                option.id = número

            flista.appendChild(option)
        }
    }
}

var numTodos = 0
var cont = 0
var numMaior = 0
var numMenor = 0
var numSoma = 0
var numMédia = 0


function cadastrar() {
    if (array.length == 0) {
        window.alert('Cadastre pelo menos um número')
    } else {
        for (var num in array) {
            numSoma += array[num]

            if (cont == 0) {
                numMaior = array[num]
                numMenor = array[num]
            } else {
                if (array[num] > numMaior) {
                    numMaior = array[num]
                }
                if (array[num] < numMenor) {
                    numMenor = array[num]
                }
            }

            cont++
        }
        resultado.innerHTML = `Foram digitados ${cont} valores`
        resultado.innerHTML += `<br>A soma entre os valores é ${numSoma}`
        resultado.innerHTML += `<br>O maior e menor valor foi, respectivamente, ${numMaior} e ${numMenor}`
        resultado.innerHTML += `<br>A média dos valores digitados é ${(numSoma / cont)}`
    }
}