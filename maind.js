const botao = document.querySelector('button');

botao.addEventListener('click', function() {


    let ativo = document.querySelector('#ativo').value;
    let api = `https://api.bcb.gov.br/dados/serie/bcdata.sgs.20542/dados?formato=json`;
    let request = new XMLHttpRequest();
    console.log(ativo)
    request.open('GET', api);

    request.onload = function() {
        let mudanca = JSON.parse(request.responseText);

        let data = document.querySelector('#Data');
        data.innerHTML = mudanca.data;

        
    };

    request.send();
    
   
    ;
});

