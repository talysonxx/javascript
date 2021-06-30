let screen = window.document.getElementById('screen')
let contexto = screen.getContext('2d')

// contexto.lineWidth = 5
// contexto.strokeStyle = 'blue'
// contexto.moveTo(0, 0)
// widht height
// contexto.lineTo(250, 250)
// contexto.lineTo(500, 0)
// contexto.stroke()



// // left right largura altura
// contexto.fillStyle = 'blue'
// contexto.fillRect(50, 30, 200, 300)

// contexto.rect(10, 10, 100, 200)
// contexto.fillStyle = 'blue'
// contexto.lineWidth = 5
// contexto.strokeStyle = 'red'
// contexto.fill()
// contexto.strokeStyle()

// contexto.clearRect(60, 30, 30, 50)







// desenhando um retângulo no canvas preenchido no canvas
contexto.fillStyle = 'red' // definindo a cor do retângulo
contexto.fillRect(10, 10, 100, 200) // distância da esquerda, distância de cime, largura e altura

// desenhando um retângulo não preenchido no canvas
contexto.strokeStyle = 'blue'
contexto.strokeRect(15, 15, 100, 200)

// criando um retângulo e definindo as bordas e preenchimento
contexto.rect(20, 20, 100, 200)
contexto.fillStyle = 'black'
contexto.lineWidth = 2
contexto.strokeStyle = 'gray'
contexto.fill()
contexto.stroke()

// limpando uma parte da tela
contexto.clearRect(25, 25, 50, 100)