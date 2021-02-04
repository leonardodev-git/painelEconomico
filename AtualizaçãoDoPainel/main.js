function loadDolar (paran) {
    const dolar = document.querySelector('.font');
    
    return fetch(`https://api.bcb.gov.br/dados/serie/bcdata.sgs.${paran}/dados?formato=json`)
        .then(data => data.json())
        
        .then(json => {
            console.log(json)
            dolar.innerHTML = `${Number(json[json.length -1].valor).toFixed(2)}`
        })
        .catch(err => console.log('Error', err))
};

loadDolar(1)