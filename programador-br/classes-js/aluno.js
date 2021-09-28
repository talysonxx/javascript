const Pessoa = require('./pessoa')

// antes de ser um aluno, ele é uma pessoa, logo ele tem que possuir todas as propriedades de uma pessoa
class Aluno extends Pessoa {
  constructor(props) {
    // super chama a class que ele herda (extends)
    super(props)
    this.turma = props.turma
  }

  // sobrepor métodos
  cumprimentos2() {
    // console.log('Olá, meu nome é ' + this.nome + ' e minha turma é ' + this.turma)
    console.log(this.cumprimentos() + ' e minha turma é ' + this.turma)
  }
}

module.exports = Aluno