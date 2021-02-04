const axios = require('axios');



const getTodos = async (codigoSerie, identificador) => {
    const BASE_URL = `https://api.bcb.gov.br/dados/serie/bcdata.sgs.${codigoSerie}/dados?formato=json`;
  try {
    const res = await axios.get(BASE_URL);

    const todos = res.data;
    
    console.log(`O IGP-DI é`, todos[1].valor);
    //window.localStorage.setItem(identificador, todos)
    
    return todos;
  } catch (e) {
    console.error(e);
  }
};

getTodos(1, 'Dólar');
