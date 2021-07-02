/*(() => {
    const getPerson = () => ({name: 'Sérgio Moro', 'eye-color': 'black'})
    console.log(getPerson())
})()*/

// THIS DENTRO DA ARROW FUNCTION
// (() => {
//     function Person() {
//         this.year = 0

//         setInterval(function () {
//             this.year = this.year + 1
//         }, 1000)
//         console.log('This e year:', this, this.year)
//     }
//     const p1 = {}
//     Person.call(p1)
// })()

// (() => {
//     function Person(idade, presidente){
//         this.ano = 2021
//         console.log(`This: ${this} Ano: ${this.ano} Presidente: ${presidente} Idade: ${idade}`)
//     }
//     const obj = {}
//     Person.call(obj, 18, 'Bolsonaro')
//     console.log(obj)
// })()

function Pessoas(){
    this.nome = 'Talyson'
    this.idade = 'x'
    console.log(this.nome, this.idade, this)
}

var obj = new Pessoas()
console.log(obj)