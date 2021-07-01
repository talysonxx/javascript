// objetos, é como se cada chave fosse uma variável guardando um determinado valor
var usuários = {
    nome: 'Talyson', // é como se nome fosse uma variável com o valor 'Talyson'
    idade: '18',
    profissão: 'Estudante',
    idiomas: 'Inglês [básico], japonês [intermediário]',
    'nome-completo': 'Talyson André Alves'
}

console.log(usuários)
console.log(usuários.idade)
console.log(usuários.nome)
console.log(usuários.profissão)
console.log(usuários['idiomas'])
console.log(usuários['nome-completo'])

// adicionando chaves e valores no objeto
usuários['ano-nascimento'] = 2002
console.log(usuários['ano-nascimento'])
usuários.sexo = 'Masculino'
console.log(usuários.sexo)

// deletando propriedade
delete usuários.idade
console.log(usuários.idade)

// brincando, passando arryas para cada chave
usuários.hobby = ['Jogar bola', 'Assisir animes', 'Ver memes']
console.log(usuários.hobby[2])

usuários.familiares = {
    pai: 'Edivan Silva Alves',
    mãe: 'Alvione dos Santos André',
    'irmão-mais-velho': 'Tavylon Thiago André Alves'
}
console.log(usuários.familiares['irmão-mais-velho'])
console.log(usuários.familiares.mãe)

usuários.familiares = {tia: 'Mônica Silva Alves'}
delete usuários.familiares.pai
console.log(usuários.familiares.tia)
console.log(usuários.familiares.pai)

usuários.habilidades = {
    instrumentosMusicais: ['Baixo', 'Guitarra'],
    linguagens: ['Inglês', 'Japa']
}
console.log(usuários.habilidades.instrumentosMusicais[1])

var usuário2 = {
    /*digaOi: function (name) {
        return 'Olá ' + name
    }*/
    // mais curta
    digaOi(name) {
        return 'Olá, ' + name
    }
}
console.log(usuário2.digaOi('talyson'))

var cor = 'rosa'
var cor2 = 'blue'
var idade2 = 18
var usuário3 = {
    name: 'Talyson',
    cor: [cor],
    cor2, // mesma coisa que a primeira, o nome a chave vai ser o nome da variável, e o valor da chave vai ser o falor contido na variável
    idade2
}
console.log(usuário3.cor)
usuário3.cor.push('black')
console.log(usuário3.cor)

usuário3.sobrenome = 'andré alves'
console.log(usuário3)


// juntar dois objetos em um só
var usuário4 = {
    nome: 'Talyson',
    idade: 18, 
}
var extraInfo = {
    naturalidade: 'Brasil',
    estado: 'Rio de Janeiro'
}
console.log(usuário4, extraInfo)
/* objetivo, dois em um só  
{
    nome: 'Talyson',
    idade: 18,
    naturalidade: 'Brasil',
    estado: 'Rio de Janeiro'
}
*/
// o primeiro vazio pois ele vai criar um objeto novo, os outros dois são os que eu quero modificar
var novoObjeto = Object.assign({}, usuário4, extraInfo)
console.log(novoObjeto)

Object.assign(usuário4, extraInfo) // vai jogar tudo do extraInfo para o objeto usuário4
console.log('usuário4', usuário4)

// mesma coisa do de cima, só que com menos linhas
var novoUser2 = {
    ...usuário4,
    ...extraInfo,
    sexo: 'Bolsonaro',
    profissão: '190'
}
console.log(novoUser2)

// dar o nome da variável o valor dela
var nomeVariavel = 'Estado'
var nome = 'lastName'
var user5 = {
    [nome]: 'Simpsons',
    // eu quero uma variável em que o nome dela seja o valor da variável nomeVariável
    //nomeVariavel: nomeVariavel
    //nomeVariavel
    [nomeVariavel]: 'Rio de Janeiro'
}
console.log(user5)