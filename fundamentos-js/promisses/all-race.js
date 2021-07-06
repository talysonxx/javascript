// Promise.all(): forma de invocar promises, uma não pode depender do valor da outra pois são executadas ao mesmo tempo em paralelo. quanto todas forem resolvidas ele retorna um array com todos os valores de todas as promisses na ordem em que eles foram passadas
function pegaCEP(cep){
    return window.fetch('https://viacep.com.br/ws/'+cep+'/json/')
}
const jaRealizada = () => Promise.resolve('Talyson')

Promise.all([
    jaRealizada(),
    pegaCEP('70316102')
]).then(function(resolvidas){
    console.log(resolvidas)
})









// Promise.race(): diferença do all é que assim que uma é resolvida ou a primeira que já foi rejeitada e retorna
const demora1000ms = () => new Promise((resolve, reject) => setTimeout(() => resolve('imprimir1000ms')), 1000)
const demora200ms = () => new Promise((resolve, reject) => setTimeout(() => resolve('imprimir200ms')), 200)
const rejeitadatest = () => new Promise((resolve, reject) => reject('Rejeitadaaaaaa'))

Promise.race([
    demora200ms(),
    demora1000ms(),
    rejeitadatest()
]).then(aMaisRapida => console.log(aMaisRapida, 'nhaaa'), reJeitada => console.log(reJeitada, 'baaah'))