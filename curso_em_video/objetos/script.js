// criando um objeto, o primeiro nome é a chave, é melhor que array
var amigo = {nome: 'José',
sexo: 'M',
peso: 85.4,
engordar(p = 0){
    console.log('Engordou')
    this.peso += p

}}
// uma função engordar no último
amigo.engordar(10)
console.log(`${amigo.nome} engordou ${amigo.peso}`)
