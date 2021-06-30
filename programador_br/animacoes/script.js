        let bloco = window.document.querySelector('div#bloco')

        let Xinit = 0
        let Yinit = 0

        function moverBloco(x, y){
            let posX = x + 'xp'
            let posY = y + 'xp'

            bloco.style.top = posX
            bloco.style.left = posY
        }

        setInterval(function(){
            moverBloco(Xinit++, Yinit++)
        }, 500)