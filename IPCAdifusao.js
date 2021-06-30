google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(graficoIgpm);
//Gráfico relativo ao índice do IGP-M, IPA-M, IPC-M, INCC-M
async function graficoIgpm() {

  var dadosIniciais = [
    ['Meses', 'INPC Difusão'],

  ];
  const request = await fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.21379/dados/ultimos/7?formato=json')
  const exemplo = await request.json();
  console.log(exemplo)


  let i = 0
  for (ex of exemplo) {
    dadosIniciais.push(
      [
        ex.data.slice(3),
        Number(ex.valor),

      ]
    )
    i++
  }

  const data = google.visualization.arrayToDataTable(dadosIniciais);
  const chart3 = new google.visualization.LineChart(document.getElementById('IPCAdifusao'));

  const options = {
    title: 'INPC x IPCA',
    curveType: 'function',
    legend: { position: 'top' },
    vAxis: { formatType: 'short' },
    width: 500,
    chartArea: { width: '80%', height: '50%' }
  };
  chart3.draw(data, options);
}
