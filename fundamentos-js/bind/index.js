function carro() {
    let velMax = 200
    console.log(this)
    console.log(this.color, this.marca, this.modelo)
}

let detalhesCarro = {
    color: 'white',
    marca: 'volvo',
    modelo: 'jsraiz'
}
let  ligarCarroDetalhes = carro.bind(detalhesCarro)
ligarCarroDetalhes()
