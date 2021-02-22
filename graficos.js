async function getDash(indice) {
  return await fetch(`http://localhost:3000/dashboard/${indice}`)
    .then(data => data.json());

}

console.log(getDash(189));

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(graficoIpa);
google.charts.setOnLoadCallback(graficoIpi);
google.charts.setOnLoadCallback(graficoIpo);

//Gráfico relativo ao índice do IPI
async function graficoIpi() {
  var array = await getDash(189)
  var data3 = google.visualization.arrayToDataTable(array);
  var options3 = {
    title: 'IPA',
    curveType: 'function',
    legend: { position: 'rigth' },
    height: 300,
    width: 650
  };
  var chart3 = new google.visualization.LineChart(document.getElementById('grafico3'));
  chart3.draw(data3, options3);
}


// //Gráfico relativo ao índice do IPo
function graficoIpo() {
  var data4 = google.visualization.arrayToDataTable([
    ['Meses', 'taxa'],
    ['Jan', 10],
    ['Fev', 20],
    ['Mar', 25],
    ['Abr', 35]
  ]);
  var options4 = {
    title: 'IPA',
    curveType: 'function',
    legend: { position: 'rigth' },
    height: 200,
    width: 200
  };
  var chart4 = new google.visualization.PieChart(document.getElementById('grafico4'));
  chart4.draw(data4, options4);
}

//Gráfico relativo ao índice do IPA
function graficoIpa() {
  var data2 = google.visualization.arrayToDataTable([
    ['Meses', 'taxa'],
    ['Jan', 10],
    ['Fev', 20],
    ['Mar', 25],
    ['Abr', 35]
  ]);
  var options2 = {
    title: 'IPA',
    curveType: 'function',
    legend: { position: 'rigth' },
    height: 250,
    width: 400
  };
  var chart2 = new google.visualization.PieChart(document.getElementById('grafico2'));
  chart2.draw(data2, options2);
}


//Gráfico relativo ao índice do IGP-M
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Meses', 'taxa'],
    ['Jan', 2.45],
    ['Fev', 2.58],
    ['Mar', 3.63],
    ['Abr', 4.54]
  ]);
  var options = {
    title: 'IGP-M',
    curveType: 'function',
    legend: { position: 'rigth' },
    height: 250,
    width: 400
  };
  var chart = new google.visualization.PieChart(document.getElementById('grafico'));
  chart.draw(data, options);
}


