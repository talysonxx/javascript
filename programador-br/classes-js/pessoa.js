class Pessoa {
  constructor(props) {
    this.nome = props.nome
    this.idade = props.idade
  }

  cumprimentos() {
    // console.log('Olá, meu nome é ' + this.nome)
    return 'Oii, meu nome é ' + this.nome
  }
}

module.exports = Pessoa