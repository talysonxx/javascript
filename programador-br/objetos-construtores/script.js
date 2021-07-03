function criarAluno(nome, n1, n2) {
    return {
        nome,
        nota1: n1, 
        nota2: n2,
        media: function() {
            return (this.nota1 + this.nota2) / 2
        }
        
    }
}

const turma = [
    criarAluno('Igor', 10, 9),
    criarAluno('Haddad', 5, 7)
]

var aluno = turma[1]
console.log(aluno)
console.log(aluno.media())

turma.forEach((elemento) => console.log(elemento))
console.log('-----------------------')
// -----------------------------------------------
function alunoFunção(nome, nota1, nota2) {
    this.nome = nome
    this.nota1 = nota1
    this.nota2 = nota2
    this.media = function media() {
        return (this.nota1 + this.nota2) / 2
    }
}

var a = new alunoFunção('Breu', 10, 6)
console.log(a.nome)
console.log('-------------')
// ---------------------------------



function alunoNovo() {
    this.nome = 'Bolsonaro'
    console.log(this.nome)
}
obj = new alunoNovo()
console.log('----------------------')