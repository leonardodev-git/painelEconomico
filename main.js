function loadDolar (paran) {
    const dolar = document.querySelector('.exemplo ul');
    let li = document.createElement('li')
    let dadosGrafico = []
    console.log(dadosGrafico)
    function insereLi(valor) {
        var node = document.createElement("LI");
        var textnode = document.createTextNode(valor);
        node.appendChild(textnode);
        document.querySelector(".exemplo ul").appendChild(node);
      }
    
    return fetch(`https://api.bcb.gov.br/dados/serie/bcdata.sgs.${paran}/dados?formato=json`)
        .then(data => data.json())
        
        .then(json => {
           let variavel = json.length - 12 // 368
           
            for (let i = variavel; i <= json.length; i++) {
                insereLi(json[i].valor)
                dadosGrafico.push(json[i].valor)
               
            }
            
           
        })
     
        .catch(err => console.log('Error', err))
};

loadDolar(189);

    // function show (users) {
    //     let output = '';
    //     for (let user = 0; user <= (users.length); user++) {
    //         output += `<>${users.valor}</>`
    //     }
    //     document.querySelector('.exemplo').innerHTML = output;
    // }

