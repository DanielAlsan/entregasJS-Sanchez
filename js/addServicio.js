const URL ='/js/data/products.json'

fetch(URL)
  .then(response => response.json())
  .then(data => mostrarData(data))
  .catch(error => console.log(error));

const mostrarData = (data)=>{
  console.log(data);
  let body = ''
  for(let i =0;i <data.length;i++){
    body +=`<tr><td>${data[i].id}</td><td>${data[i].arbol}</td><td>${data[i].costo}</td></tr>`
  }
  document.getElementById('data').innerHTML=body
  document.getElementById('datoActual').innerHTML=data.length+1
}


