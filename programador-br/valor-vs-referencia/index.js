// arrays, objetos são referências
let turmaA = ['Talyson', 'João', 'Pedro']

// referência
// let turmaB = turmaA
// turmaB.push('Júlia')
// console.log('A', turmaA)
// console.log('B', turmaB)

// valor
// gambiarras para resolver com arrays
// let turmaB = turmaA.slice()
// let turmaB = [...turmaA]
// turmaB.push('Augusto')
// console.log('A', turmaA)
// console.log('B', turmaB)

// com obj
let alunoA = {nome: 'talyson', idade: 18}

// referência
// let alunoB = alunoA
// alunoB.nome = 'Júnior'
// console.log({alunoA, alunoB})

// valor
// let alunoB = Object.assign({}, alunoA)
// let alunoB = {...alunoA}
// alunoB.idade = 30
let {...alunoB} = alunoA
alunoB.nome = 'Lula'
console.log({alunoA, alunoB})

turma = {
  nome: 'sim',
  matricula: 122,
  idade: 12,
  moradia: 'poor'
}
let {nome, matricula, ...resto} = turma
console.log(nome, matricula, resto)
