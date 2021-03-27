var diaSemana = new Date().getDay()
var frase
/*
    0 - domingo
    1 - segunda
    2 - terca
    3 - quarta
    4 - quinta
    5 - sexta
    6 - sábado
*/

diaSemana = 0
console.log(diaSemana)

switch (diaSemana) {
    case 0:
        frase = 'domingo'
        break
    case 1:
        frase = 'segunda'
        break
    case 2:
        frase = 'terça'
        break
    case 3:
        frase = 'quarta'
        break
    case 4:
        frase = 'quinta'
        break
    case 5:
        frase = 'sexta'
        break
    default:
        frase = 'sábado'
        break
}
console.log(frase)