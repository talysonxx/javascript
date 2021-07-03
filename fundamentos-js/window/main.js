window.document.getElementsByTagName('button')[0].addEventListener('click', clicar)
var p = window.document.getElementsByTagName('p')[0]
p.addEventListener('click', clicou)

function clicar(){
    p.innerHTML = '<b>Clique em mim</b>'
}

function clicou(){
    // window.open tem o atributo target="_blank"
    // window.open('https://google.com')
    var confirm = window.confirm('Você será direcionado para a página de login do Google. Deseja continuar?')
    if(confirm == 1){
        window.location.href = 'https://accounts.google.com/login'
    }else{
        window.alert('Você permanecerá na mesma página.')
    }
}