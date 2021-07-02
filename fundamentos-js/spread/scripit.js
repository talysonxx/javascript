// spread ...
var partes =  ['ombro', 'joelho']
var musica = ['cabeca', ...partes, 'e', 'pés']
// mesma coisa de
var musica = ['cabeca', 'ombro', 'joelho', 'e', 'pés']


// também pode ser usado com functions
function fn(x, y, z) {
    console.log(x, y, z)
}
var args = [0, 2, 3]
fn(...args)