function carregar() {
    var mensagem = window.document.querySelector('div#mensagem')
    var imagem = window.document.querySelector('img#imagem')
    var hora = new Date().getHours()
    var minutos = new Date().getMinutes()
    var mensagemF = `agora ${hora == 1 ? 'é' : 'são'} ${hora} ${hora == 1 ? 'hora' : 'horas'} e ${minutos} ${minutos == 1 ? 'minuto' : 'minutos'}`

    if (hora >= 0 && hora < 12) {
        // bom dia
        mensagemF = 'Bom dia, ' + mensagemF
        imagem.src = '_imagens/manha.png'
        window.document.body.style = 'background-color: #7B3017'

    } else if (hora >= 12 && hora < 18) {
        // boa tarde
        mensagemF = 'Boa tarde, ' + mensagemF
        imagem.src = '_imagens/tarde.png'
        window.document.body.style = 'background-color: #616F27'
    } else {
        // boa noite
        mensagemF = 'Boa noite, ' + mensagemF
        imagem.src = '_imagens/noite.png'
        window.document.body.style = 'background-color: #373F42'
    }
    mensagem.innerHTML = mensagemF
}