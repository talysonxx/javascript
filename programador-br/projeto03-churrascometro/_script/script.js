// carne - 400g / pessoa até 6h, depois 650
// cerveja - 1200ml / pessoa até 6h, depois 2000ml
// refrigerante/água - 1000ml / pessoa até 6h, depois 1500ml
// criaças valem por 0,5 pessoa

window.document.getElementsByTagName('a')[0].addEventListener('click', calcular)

function calcular(){
    // pegando os valores do input
    let divResposta = window.document.getElementById('resposta')
    let adultos = window.document.getElementById('adultos')
    let crianças = window.document.getElementById('crianças')
    let duração = window.document.getElementById('duração')

    // validando inputs
    if(adultos.value == '' || adultos.value < 0){
        window.alert('Por favor, informe o número de adultos!')
        adultos.focus()
    }else if(duração.value == '' || duração.value < 0){
        window.alert('Por favor, informe a duração!')
        duração.focus()
    }else if(crianças.value == '' ||crianças.value < 0){
        crianças.value = 0
    }else{
        // dados validos
        // fazendo cálculos
        let adultosTot = Number(adultos.value) + crianças.value * 0.5

        divResposta.innerHTML = `<p>Quantidade de carne <strong>${carnePP(duração.value) * adultosTot / 1000} kg</strong><p>`
        divResposta.innerHTML += `<p>Quantidade de cerveja <strong>${cervejaPP(duração.value) * adultosTot / 1000} L</strong><p>`
        divResposta.innerHTML += `<p>Quantidade de refrigerante <strong>${refrigerantePP(duração.value) * adultosTot / 1000} L</strong><p>`

        function tempo(duração){
            return duração > 6
        }
        function carnePP(duração){
            if(tempo(duração)){
                return 650
            }else{
                return 400
            }
        }
        function cervejaPP(duração){
            if(tempo(duração)){
                return 2000
            }else{
                return 1200
            }
        }
        function refrigerantePP(duração){
            if(tempo(duração)){
                return 1500
            }else{
                return 1000
            }
        }
    }
}