window.document.querySelector('input#botao').addEventListener('click', verificar)

function verificar() {
    var ano = new Date().getFullYear()
    var ano_formulario = window.document.querySelector('input#nascimento').value
    var resultado = window.document.querySelector('p#resultado')
    //var img = window.document.createElement('img') // criar elemento com a tag img
    //img.setAttribute('id', 'foto') // atribuir id a img com nome foto
    var imagem = window.document.querySelector('img#imagem')

    if (ano_formulario.lenght == 0 || ano_formulario > ano) {
        window.alert('Digite um ano válido')
    } else {
        var sexo = window.document.getElementsByName('sexo')
        var idade = ano - ano_formulario
        var gênero = sexo[0].checked ? 'homem' : 'mulher'
        
        if (idade >= 0 && idade < 10) {
            // criança
            //imagem.src = `${gênero == 'homem' ? '_imagens/foto-bebe-m.png' : '_imagens/foto-bebe-f.png'}`
            imagem.setAttribute('src', `${gênero == 'homem' ? '_imagens/foto-bebe-m.png' : '_imagens/foto-bebe-f.png'}`)
            resultado.innerHTML = `Detectamos uma criança com ${idade} ${idade == 1 ? 'ano' : 'anos'}`
        } else if (idade < 21) {
            // jovem
            imagem.src = `${gênero == 'homem' ? '_imagens/foto-jovem-m.png' : '_imagens/foto-jovem-f.png'}`
            resultado.innerHTML = `Detectamos ${gênero == 'homem' ? 'um' : 'uma'} jovem com ${idade} anos`
        } else if (idade < 50) {
            // adulto
            imagem.src = `${gênero == 'homem' ? '_imagens/foto-adulto-m.png' : '_imagens/foto-adulto-f.png'}`
            resultado.innerHTML = `Detectamos ${gênero == 'homem' ? 'um adulto' : 'uma adulta'} com ${idade} anos`
        } else {
            // idoso
            imagem.src = `${gênero == 'homem' ? '_imagens/foto-idoso-m.png' : '_imagens/foto-idoso-f.png'}`
            resultado.innerHTML = `Detectamos ${gênero == 'homem' ? 'um idoso' : 'uma idosa'} com ${idade} anos`
        }
    }
    // resultado.appendChild(imagem) - adicionar o elemento imagem  
}