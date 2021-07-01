function tabuada() {
    var numero = Number(window.document.getElementById('numero').value)
    var tabuada = window.document.getElementById('tabuada')

    if (numero == 0) {
        window.alert('Digite um número válido')
    } else {
        tabuada.innerHTML = ''
        var contador = 1
        while (contador <= 10) {
            var option = window.document.createElement('option')
            option.text = `${contador} x ${numero} = ${contador * numero}`
            option.value = `tab${contador}`
            option.id = `tab${contador}`
            tabuada.appendChild(option)
            contador++
        }
    }
}