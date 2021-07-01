// Nome do aluno: nota1 - nota2 - nota3 - nota4 - aprovado/reprovado
// comentário de linha control + ;

const alunos = [
    {
        nome: 'João',
        primeiroBi: 8,
        segundoBi: 4
    },
    {
        nome: 'Pedro',
        primeiroBi: 5,
        segundoBi: 10
    },
    {
        nome: 'Júlia',
        primeiroBi: 9,
        segundoBi: 9
    },
    {
        nome: 'Joe Biden',
        primeiroBi: 3,
        segundoBi: 5
    }
]
var media = (nota1, nota2) => (nota1 + nota2) / 2

var resultado = (m) => m >= 7 ? 'aprovado' : 'reprovado'

for (let aluno of alunos) {
    aluno['media'] = media(aluno.primeiroBi, aluno.segundoBi)
    // alunos[cont]['resultado'] = alunos[cont]['media'] >= 7 ? 'aprovado' : 'reprovado' 
    aluno['resultado'] = resultado(aluno['media'])
}
// console.log(alunos)

for (let aluno of alunos) {
    console.log(`
    Aluno: ${aluno.nome} 
    nota1: ${aluno.primeiroBi}, 
    nota2: ${aluno.segundoBi}, 
    media: ${aluno.media}, 
    resultado: ${aluno.resultado}
    `)
}