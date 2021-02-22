async function getDash(indice) {
  return await fetch(`http://localhost:3000/dashboard/${indice}`)
    .then(data => data.json());

}

