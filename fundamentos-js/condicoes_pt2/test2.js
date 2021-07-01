var hora = new Date().getHours()
//var hora = agora.getHours()

console.log(`são exatamente ${hora}`)
if (hora < 12 && hora >= 6) {
    console.log('bom dia')
} else if (hora < 18 && hora >= 12) {
    console.log('boa tarde')
} else if (hora >= 18 && hora != 0) {
    console.log('boa noite')
} else {
    console.log('boa madrugada')
}