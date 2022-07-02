function getDadosEnderecoPorCep(cep) {

    document.getElementById('cep').className = 'form-control'
    document.getElementById('endereco').value = ''
    document.getElementById('bairro').value = ''
    document.getElementById('cidade').value = ''
    document.getElementById('estado').value = ''

    let url = 'https://viacep.com.br/ws/'+ cep +'/json/'
    let requestCEP = new XMLHttpRequest()
    requestCEP.open('GET', url)

    requestCEP.onreadystatechange = () => {
        if(requestCEP.readyState == 4 && requestCEP.status == 200) {
            
            let dadosJSONText = requestCEP.responseText
            let dadosJSONObj = JSON.parse(dadosJSONText)//17560246
            
            if(dadosJSONObj.erro == 'true'){
                document.getElementById('cep').className = 'form-control border-danger'
            } else {
                document.getElementById('cep').className = 'form-control border-success'
                document.getElementById('endereco').value = dadosJSONObj.logradouro
                document.getElementById('bairro').value = dadosJSONObj.bairro
                document.getElementById('cidade').value = dadosJSONObj.localidade
                document.getElementById('estado').value = dadosJSONObj.uf
            }
        }
    }
    requestCEP.send()
}