// retorna uma promisse já resolvida
const simpleFn = async () => [1, 2, 3, 4]
// igual
const simpleFn2 = () => new Promise((resolve, reject) => resolve([1, 2, 3, 4]))

// simpleFn().then(contarArr)
// simpleFn2().then(contarArr)
// como disse, não precisa de parâmetro, é como se fosse
// simpleFn().then(contarArr(promisseResolvidaAqui))

/*
são iguais 
async function getNumero(){
    return await 2
}
function getNumero(){
    return Promise.resolve(2)
}
*/

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
// getPost()
// ou
// getPost().then(console.log)


async function getUsers(){
    const resultado = await window.fetch('https://jsonplaceholder.typicode.com/users')
    // return (await window.fetch('https://jsonplaceholder.typicode.com/users')).json()
    return resultado.json()
}
// getUsers().then(console.table)


async function getUserPosts(userId){
    const posts = await window.fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    return posts.json()
}
(async function(){
    const users =  await getUsers()
    // console.log(users)
    // ou
    // getUsers().then(users => console.log(users))
    // console.log(users[i])
    // id, name, username, email, adress
    // let {id, name, username, email, address} = users[i]
    // console.log(id, name, username, email, address)
    let posts = []
    for(let i = 0; i < users.length; i++){
        // posts.push(await getUserPosts(users[i].id))
        posts.push(getUserPosts(users[i].id))
    }
    // console.log(posts)
    // Promise.all(posts).then(console.log)
    const allPosts = await Promise.all(posts)
    console.log(allPosts)
    // const result = await Promise.all(users.map(u => getUserPosts(u.id)))
    // console.log(result)
    // com arrow function não dá pra especionar o valor no devtools com breakpoint
}())