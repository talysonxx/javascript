const Pessoa = require('./pessoa')
const Aluno = require('./aluno')

let Marcos = new Aluno({nome: 'Marcos', idade: 12, turma: 'B'})
console.log(Marcos)
Marcos.cumprimentos2()