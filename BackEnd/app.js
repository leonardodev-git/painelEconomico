const express = require('express')
const axios = require('axios').default;
const cors = require('cors');

const app = express()
app.use(cors());

app.get('/dashboard/:indice', async (req, res) => {
  const { indice } = req.params;
  const data = await axios.get(`https://api.bcb.gov.br/dados/serie/bcdata.sgs.${indice}/dados?formato=json`)
    .then(({ data }) => data)
    .catch(err => console.log('Error', err))


  let variavel = data.length - 12;
  let a = 0;
  let array = [
    ['x', 'taxa'],
  ];
  for (let i = variavel; i < data.length && a < data.length; i++) {
    array.push([data[i].data.slice(-7), Number(data[i].valor)])

  }
  res.json(array)

})



app.listen(3000, () => {
  console.log(`Servidor executando na uri http://localhost:3000`)
})

