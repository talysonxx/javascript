/*function soma(n1 = 0, n2 = 0) {
    return n1 + n2
}*/

/*const soma = (n1 = 0, n2 = 0) => {
    return n1 + n2
}*/


// SEM RETURN
// posso tirar o nome return que retorna mesmo assim, só tem que tirar o {}
const soma = (n1, n2) => n1 + n2
console.log(soma(20, 22))


// SEM PARÂMETROS
const comunidade = () => 'Vila da Serra'
console.log(comunidade())


// SÓ COM UM PARÂMETRO
const dobro = n1 => n1 * 2
console.log(dobro(8))


// RETURN COM OS ()
// PARA EVITAR CONFLITOS COM FUNCTIONS DE MESMO 'NOME' EM ARQUIVOS DIFERENTES, QUARDE-AS EM UMA FUNCTION (não rodou)
/*(() => {
    const getPerson = () => ({name: 'Joe Biden', 'eye-color': 'blue'})
    console.log(getPerson())
})()*/


