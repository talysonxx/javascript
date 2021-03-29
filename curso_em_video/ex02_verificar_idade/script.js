window.document.querySelector('input#botao').addEventListener('click', verificar)

function verificar() {
    var ano = new Date().getFullYear()
    var ano_formulario = window.document.querySelector('input#nascimento').value
    var resultado = window.document.querySelector('div#resultado')
    var img = window.document.createElement('img') // criar elemento com a tag img
    img.setAttribute('id', 'imagem') // atribuir id a img com nome foto
    //img.setAttribute('src', `${gênero == 'homem' ? '_imagens/foto-bebe-m.png' : '_imagens/foto-bebe-f.png'}`)

    if (ano_formulario <= 0 || ano_formulario > ano) {
        window.alert('Digite um ano válido')
    } else {
        var sexo = window.document.getElementsByName('sexo')
        var idade = ano - ano_formulario

        if (sexo[0].checked) {
            // homem
            if (idade >= 0 && idade < 10) {
                // bebe homem
                resultado.innerHTML = `Detectamos um bebê com ${idade} ${idade == 1 ? 'ano' : 'anos'}`
                img.setAttribute('src', '_imagens/foto-bebe-m.png')
            } else if (idade < 21) {
                // jovem homem
                resultado.innerHTML = `Detectamos um jovem com ${idade} anos`
                img.setAttribute('src', '_imagens/foto-jovem-m.png')
            } else if (idade < 65) {
                resultado.innerHTML = `Detectamos um adulto com ${idade} anos`
                // adulto homem
                img.setAttribute('src', '_imagens/foto-adulto-m.png')
            } else {
                resultado.innerHTML = `Detectamos um idoso com ${idade} anos`
                // idoso homem
                img.setAttribute('src', '_imagens/foto-idoso-m.png')
            }
        } else {
            // mulher
            if (idade >= 0 && idade < 10) {
                // bebe mulher
                resultado.innerHTML = `Detectamos um bebê com ${idade} ${idade == 1 ? 'ano' : 'anos'}`
                img.setAttribute('src', '_imagens/foto-bebe-f.png')
            } else if (idade < 21) {
                // jovem mulher
                resultado.innerHTML = `Detectamos uma jovem com ${idade} anos`
                img.setAttribute('src', '_imagens/foto-jovem-f.png')
            } else if (idade < 65) {
                // adulto mulher
                resultado.innerHTML = `Detectamos uma adulta com ${idade} anos`
                img.setAttribute('src', '_imagens/foto-adulto-f.png')
            } else {
                // idoso mulher
                resultado.innerHTML = `Detectamos uma idosa com ${idade} anos`
                img.setAttribute('src', '_imagens/foto-idoso-f.png')
            }
        }
    }
    resultado.appendChild(img) // adicionar o elemento imagem embaixo do resultado
}