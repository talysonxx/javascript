// // atribuir partes de uma variável a outra variável
// // método tradicional
// var arr = ['Apple', 'Banana', 'Orange', ['Tomato']]
// var apple = arr[0]
// var banana = arr[1]
// var orange = arr[2]
// var tomato = arr[3][0]
// // usando destructuring
// var [apple2, banana2, orange2, [tomato2]] = arr
// console.log(tomato, tomato2)

// agora com objetos
var obj = {
    name: 'Eu',
    age: 12,
    ['last name']: 'Boruto',
    props: {
        endereco: 'sp 435',
        favoriteColors: ['blue', 'black', 'light yellow'],
        last: {
            first: 1
        }
    }
}
// método tradicional
var name = obj.name
var endereco1 = obj.props.endereco
// console.log(endereco1)
var colorBlack = obj.props.favoriteColors[1]
// console.log(colorBlack)
// usando destructuring
// aqui estou pegando o valor na propriedade name do obj e adicionando a variável name2; o mesmo vale pra ['last name']
var {name: name2, age, ['last name']: ultimoNome, props: {endereco: endereco2, favoriteColors: [color1, color2, color3], last: {first: primeiro}}} = obj
console.log(ultimoNome)
console.log(endereco2)
console.log(color2)
console.log(primeiro)