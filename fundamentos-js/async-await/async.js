// retorna uma promisse já resolvida
const simpleFn = async () => [1, 2, 3, 4]
// igual
const simpleFn2 = () => new Promise((resolve, reject) => resolve([1, 2, 3, 4]))

simpleFn().then(contarArr)
simpleFn2().then(contarArr)
// como disse, não precisa de parâmetro, é como se fosse
// simpleFn().then(contarArr(promisseResolvidaAqui))


function contarArr(arr){
    arr.forEach(valorDoArray => console.log(valorDoArray))
    escrever()
}
function escrever(){
    console.log('============')
}

async function getPost(){
    // só executa console.log quando eu tiver o resultado da requisiçaõ, enquanto isso o código fica travado
    const resultado = await window.fetch('https://jsonplaceholder.typicode.com/posts')
    // como retorna uma promise, fica pendente
    // const data = resultado.json()
    // agora sim, quando a promisse for resolvida ele retorna
    const data = await resultado.json()
    console.log(data)
    // return resultado.json()
}
getPost()
// ou
// getPost().then(console.log)