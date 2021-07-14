// console.log('Primeiro')
        // setTimeout(() => console.log('Segundo'), 0)
        // console.log('Terceiro')


        /*
        uma promisse tem quatro estados: 
        - pendente - sem resultado
        - realizada - sucesso
        - rejeitado - falha
        - estabelecida - resultado final
        */

        // uma promise já resolvida
        const jaRealizada = () => Promise.resolve('Talyson')
        // método de uma promise já resolvida: then excuta uma função assim que a promisse é resolvida
        jaRealizada().then(nome => console.log('Promise resolvida, caro', nome))

        // uma promise já rejeitada
        const jaRejeitada = () => Promise.reject('Promise rejected')
        // método de uma promise rejeitada: cath, ele trata o erro
        jaRejeitada().catch(promiseError => console.log(promiseError))

        function promiseTrabalhada(){
            return new Promise((resolve, reject) => setTimeout(() => resolve('Talyson André'), 1000))
        }
        promiseTrabalhada().then(message => console.log(message)) 
        
        // fazendo requisição de um CEP
        // retorna uma promise resolvida
        window.fetch('https://viacep.com.br/ws/70316102/json/').then((data) => data.json().then((data) => console.log(data)))

        window.fetch('https://viacep.com.br/ws/70316102/json/').then(data => data.json()).then((endereco => console.log(JSON.stringify(endereco))))

        const cepPromise = () => new Promise((resolve, reject) => resolve('70316102'))
        cepPromise().then((meuCep) => window.fetch('https://viacep.com.br/ws/'+meuCep+'/json/').then(data => data.json()).then(data => console.log(data)).catch(() => console.log('Ocorreu um erro')))



        const cepPromise2 = () => new Promise((resolve, reject) => resolve('70316102'))

        cepPromise2().then(function(cep){
            return window.fetch('https://viacep.com.br/ws/'+cep+'/json/').
            then(function(data){
                return data.json()
            }).
            then(function(){
                return jaRejeitada()
            }).then(function(endereco){
                console.log(endereco)
            }).catch(function(){
                console.log('houve algum erro durante a requisição')
            })
        })




        // código limpo
        function pegaCEP(cep){
            return window.fetch('https://viacep.com.br/ws/'+cep+'/json/')
        }
        function transoformaJson(data){
                return data.json()
        }
        function imprimiEndereco(endereco){
                console.log(endereco)
        }
        cepPromise2().then(pegaCEP).then(transoformaJson).then(imprimiEndereco)


        // não há a necessidade de passaar um parâmetro para a função, ela já joga automaticamente, ocorreu como se promiseTest().then(imprimirAnime('Alicization'))
        const promiseTest = () => new Promise((resolve, reject) => reject('Alicization'))
        const imprimirAnime = nome => console.log('Tudo certo,', nome)
        const continuacao = () => console.log('Ainda tudo certo')
        const imprimirFinal = () => console.log('Executado, independente se deu erro ou não')
        const tratarErro = erro => console.log('Amigo, deu:', erro)
        promiseTest().then(imprimirAnime).then(continuacao).catch(tratarErro).finally(imprimirFinal)

