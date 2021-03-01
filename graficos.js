async function getDash(indice) {
  return await fetch(`http://localhost:3000/dashboard/${indice}`)
    .then(data => data.json());

}

console.log(getDash(189));

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(graficoIgpm);
google.charts.setOnLoadCallback(graficoIpca);
google.charts.setOnLoadCallback(graficoNucleo);
google.charts.setOnLoadCallback(graficoInpcIpca);
google.charts.setOnLoadCallback(graficoIpcaDifusao);
google.charts.setOnLoadCallback(graficoIpcaComercializavel);

//Gráfico relativo ao índice do IGP-M, IPA-M, IPC-M, INCC-M
function graficoIgpm() {
  // var array = await getDash(189)
  var data = google.visualization.arrayToDataTable([
    ['Meses', 'IGP-M', 'IPA-M', 'IPC-M', 'INCC-M'],
    ['Mar/20', 1.24, 1.76, 0.12, 0.38],
    ['Abr/20', 0.80, 1.12, 0.13, 0.18],
    ['Maio/20', 0.28, 0.59, -0.60, 0.21],
    ['Jun/20', 1.56, 2.25, 0.04, 0.32],
    ['Jul/20', 2.23, 3.00, 0.49, 0.84],
    ['Ago/20', 2.74, 3.74, 0.48, 0.82],
    ['Set/20', 4.34, 5.92, 0.64, 1.15],
    ['Out/20', 3.23, 4.15, 0.77, 1.69],
    ['Nov/20', 3.28, 4.26, 0.72, 1.29],
    ['Dez/20', 0.96, 0.90, 1.21, 0.88],
    ['Jan/21', 2.58, 3.38, 0.41, 0.93],
    ['Fev/21', 2.53, 3.28, 0.35, 1.07],
  ]);
  var options = {
    title: 'IGP-M x IPA-M x IPC-M x INCC-M',
    curveType: 'function',
    legend: { position: 'rigth' },
    height: 300,
    width: 968
  };
  var chart3 = new google.visualization.LineChart(document.getElementById('grafico'));
  chart3.draw(data, options);
}


// //Gráfico relativo ao índice do IPCA livre x Monitorados
function graficoIpca() {
  var data2 = google.visualization.arrayToDataTable([
    ['Meses', 'IPCA - Livre', 'IPCA - Monitorado'],
    ['Fev/20', 0.44, -0.28],
    ['Mar/20', 0.17, -0.22],
    ['Abr/20', 0.30, -2.06],
    ['Maio/20', -0.16, -1.02],
    ['Jun/20', 0.04, 0.89],
    ['Jul/20', 0.06, 1.23],
    ['Ago/20', 0.05, 0.78],
    ['Set/20', 0.82, 0.13],
    ['Out/20', 1.08, 0.23],
    ['Nov/20', 1.06, 0.41],
    ['Dez/20', 1.11, 2.04],
    ['Jan/21', 0.44, -0.29],
  ]);
  var options2 = {
    title: 'IPCA - Livre x IPCA - Monitorado',
    curveType: 'function',
    legend: { position: 'rigth' },
    height: 300,
    width: 968
  };
  var chart2 = new google.visualization.LineChart(document.getElementById('grafico2'));
  chart2.draw(data2, options2);
}

//Gráfico relativo ao índice do IPA
function graficoNucleo() {
  var data3 = google.visualization.arrayToDataTable([
    ['Meses', 'EX-0', 'EX-3', 'NP-55', 'NP-Exclusão', 'NP-Aparada'],
    ['Fev/20', 0.25, 0.25, 0.12, 0.52, 0.14],
    ['Mar/20', 0.12, 0.12, 0.13, -0.10, 0.17],
    ['Abr/20', -0.03, -0.06, -0.60, -0.13, 0.00],
    ['Maio/20', -0.13, -0.06, 0.04, -0.27, -0.07],
    ['Jun/20', -0.02, 0.24, 0.49, -0.05, 0.21],
    ['Jul/20', 0.02, 0.17, 0.48, 0.04, 0.17],
    ['Ago/20', 0.10, 0.18, 0.64, -0.21, 0.23],
    ['Set/20', 0.36, 0.21, 0.77, 0.33, 0.28],
    ['Out/20', 0.66, 0.50, 0.72, 0.72, 0.47],
    ['Nov/20', 0.38, 0.55, 1.21, 0.49, 0.45],
    ['Dez/20', 0.60, 0.66, 0.41, 0.86, 0.69],
    ['Jan/21', 0.56, 0.48, 0.35, 0.27, 0.47],
  ]);
  var options3 = {
    title: 'Núcleo do IPCA',
    curveType: 'function',
    legend: { position: 'rigth' },
    height: 300,
    width: 968
  };
  var chart3 = new google.visualization.LineChart(document.getElementById('grafico3'));
  chart3.draw(data3, options3);
}


//Gráfico relativo ao índice do INPC x IPCA
function graficoInpcIpca() {
  var data4 = google.visualization.arrayToDataTable([
    ['Meses', 'INPC', 'IPCA'],
    ['Fev/20', 0.17, 0.25],
    ['Mar/20', 0.18, 0.07],
    ['Abr/20', -0.23, -0.31],
    ['Maio/20', -0.25, -0.38],
    ['Jun/20', 0.30, 0.26],
    ['Jul/20', 0.44, 0.36],
    ['Ago/20', 0.36, 0.24],
    ['Set/20', 0.87, 0.64],
    ['Out/20', 0.89, 0.86],
    ['Nov/20', 0.95, 0.89],
    ['Dez/20', 1.46, 1.35],
    ['Jan/21', 0.27, 0.25],
  ]);
  var options4 = {
    title: 'INPC x IPCA',
    curveType: 'function',
    legend: { position: 'rigth' },
    height: 300,
    width: 968
  };
  var chart4 = new google.visualization.LineChart(document.getElementById('grafico4'));
  chart4.draw(data4, options4);
}

//Gráfico relativo ao IPCA - Difusão

function graficoIpcaDifusao() {
  var data5 = google.visualization.arrayToDataTable([
    ['Meses', 'IPCA - Difusão'],
    ['Fev/20', 49.34],
    ['Mar/20', 58.09],
    ['Abr/20', 53.05],
    ['Maio/20', 42.97],
    ['Jun/20', 55.17],
    ['Jul/20', 54.38],
    ['Ago/20', 55.17],
    ['Set/20', 63.40],
    ['Out/20', 68.17],
    ['Nov/20', 66.58],
    ['Dez/20', 72.15],
    ['Jan/21', 65.52],
  ]);
  var options5 = {
    title: 'IPCA - Difusão',
    curveType: 'function',
    legend: { position: 'rigth' },
    height: 300,
    width: 968
  };
  var chart5 = new google.visualization.LineChart(document.getElementById('grafico5'));
  chart5.draw(data5, options5);
}

// Gráfico relativo ao IPCA - Comercializável

function graficoIpcaComercializavel() {
  var data6 = google.visualization.arrayToDataTable([
    ['Meses', 'IPCA Comercializável', 'Não Comercializável'],
    ['Fev/20', 0.02, 0.71],
    ['Mar/20', 0.14, 0.18],
    ['Abr/20', -0.25, 0.68],
    ['Maio/20', 0.05, -0.29],
    ['Jun/20', 0.43, -0.22],
    ['Jul/20', 0.63, -0.33],
    ['Ago/20', 0.71, -0.39],
    ['Set/20', 1.51, 0.33],
    ['Out/20', 1.71, 0.63],
    ['Nov/20', 1.61, 0.67],
    ['Dez/20', 1.58, 0.78],
    ['Jan/21', 0.63, 0.30],
  ]);
  var options6 = {
    title: 'IPCA Comercializável x Não Comercializável',
    curveType: 'function',
    legend: { position: 'rigth' },
    height: 300,
    width: 968
  };
  var chart6 = new google.visualization.LineChart(document.getElementById('grafico6'));
  chart6.draw(data6, options6);
}