google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(graficoIgpm);
//Gráfico relativo ao índice do IGP-M, IPA-M, IPC-M, INCC-M
async function graficoIgpm() {

  var dadosIniciais = [
    ['Meses', 'EX - 0', 'EX - 3', 'NP - 55', 'NP - Aparada', 'NP - Exclusão'],

  ];
  const request = await fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.11426/dados/ultimos/7?formato=json')
  const request2 = await fetch(`https://api.bcb.gov.br/dados/serie/bcdata.sgs.11427/dados/ultimos/7?formato=json`)
  const request3 = await fetch(`https://api.bcb.gov.br/dados/serie/bcdata.sgs.16122/dados/ultimos/7?formato=json`)
  const request4 = await fetch(`https://api.bcb.gov.br/dados/serie/bcdata.sgs.27839/dados/ultimos/7?formato=json`)
  const request5 = await fetch(`https://api.bcb.gov.br/dados/serie/bcdata.sgs.28750/dados/ultimos/7?formato=json`)
  const exemplo = await request.json();
  const exemplo2 = await request2.json();
  const exemplo3 = await request3.json();
  const exemplo4 = await request4.json();
  const exemplo5 = await request5.json();


  let i = 0
  for (ex of exemplo) {
    dadosIniciais.push(
      [
        ex.data.slice(3),
        Number(ex.valor),
        Number(exemplo2[i].valor),
        Number(exemplo3[i].valor),
        Number(exemplo4[i].valor),
        Number(exemplo5[i].valor)
      ]
    )
    i++
  }

  const data = google.visualization.arrayToDataTable(dadosIniciais);
  const chart3 = new google.visualization.LineChart(document.getElementById('IPCAnucleos'));

  const options = {
    title: 'IPCA - Livre x IPCA - Monitorado',
    curveType: 'function',
    legend: { position: 'top' },
    vAxis: { formatType: 'short' },
    width: 500,
  };
  chart3.draw(data, options);
}

