window.document.querySelector('input#botao').addEventListener('click', clicar)

function clicar() {
    window.document.querySelector('input#botao').addEventListener('click', clicar)
    var inicio = Number(window.document.querySelector('input#inicio').value)
    var fim = Number(window.document.querySelector('input#fim').value)
    var passo = Number(window.document.querySelector('input#passo').value)
    
    if (inicio == 0 || fim == 0 || passo == 0) {
        window.alert('Dados incorretos')
    } else if ((inicio > fim && passo >= 0) || (fim > inicio && passo <= 0)) {
        window.alert('Quer explodir o PC?')
    } else if (inicio > fim && passo < 0) {
        // contagem descrescente
        for (inicio; fim <= inicio; inicio += passo) {
            window.document.getElementsByTagName('div')[1].innerHTML += `\u{1F449} ${inicio} `
        }
        window.document.getElementsByTagName('div')[1].innerHTML += `\u{1F448}`
    } else {
        // contagem crescente
        for (inicio; inicio <= fim; inicio += passo) {
            window.document.getElementsByTagName('div')[1].innerHTML += `\u{1F449} ${inicio} `
        }
        window.document.getElementsByTagName('div')[1].innerHTML += `\u{1F448}`
    }
}