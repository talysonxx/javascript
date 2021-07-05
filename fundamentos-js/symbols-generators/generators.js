// gerando números infinitos
console.log('=============')
function* numerosInfinitos(){
    let numero = 0
    while (true){
        yield numero
        numero++
    }
}
const it2 = numerosInfinitos()
console.log(it2.next())
console.log(it2.next())
console.log(it2.next())