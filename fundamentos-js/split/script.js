// usado para separar strings
// retorna um array
const stringExemplo = 'Talyson Konno Kazuto'
for (let nome of stringExemplo.split(' ')) {
    console.log(nome)
}
console.log('===========')
const stringGrande = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit expedita cupiditate asperiores architecto. Aliquid sequi cumque totam voluptas a non porro, nulla enim ad modi dolorum deserunt sint libero.'
for (let palavra of stringGrande.split(" ", 10)){
    console.log(palavra)
}