google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(graficoIgpm);
//Gráfico relativo ao índice do IGP-M, IPA-M, IPC-M, INCC-M
async function graficoIgpm() {

  var dadosIniciais = [
    ['Meses', 'IPCA - C', 'IPCA - NC'],

  ];
  const request = await fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.4447/dados/ultimos/7?formato=json')
  const request2 = await fetch(`https://api.bcb.gov.br/dados/serie/bcdata.sgs.4448/dados/ultimos/7?formato=json`)
  const exemplo = await request.json();
  const exemplo2 = await request2.json();


  let i = 0
  for (ex of exemplo) {
    dadosIniciais.push(
      [
        ex.data.slice(3),
        Number(ex.valor),
        Number(exemplo2[i].valor)
      ]
    )
    i++
  }

  const data = google.visualization.arrayToDataTable(dadosIniciais);
  const chart3 = new google.visualization.LineChart(document.getElementById('IPCACxNC'));

  const options = {
    title: 'IPCA - C x IPCA - NC',
    curveType: 'function',
    legend: { position: 'top' },
    vAxis: { formatType: 'short' },
    width: 500,
  };
  chart3.draw(data, options);
}







