function sortear(){
    console.clear()
    let jogadores = ['Pedro', 'Guilherme', 'Talyson', 'Gabi', 'Diogo']
    let assuntos = ['cap21 o comércio exterior brasileiro', 'cap22 transportes e telecomunicações no brasel']
    for (jogador in jogadores){
        let jogador = Math.floor(Math.random() * 5) // pega um número entre 0 e 4
        let assunto = Math.floor(Math.random() * 2) // pega um número entre 0 e 1
        console.log(`nome: ${jogadores[jogador]}\nAssunto: ${assuntos[assunto]}`)
    }
}