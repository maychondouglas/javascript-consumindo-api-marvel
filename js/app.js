//https://gateway.marvel.com/v1/public/series?apikey=a00f5f0062160170faeec734efbf8566&ts=50&hash=92b5384e896f50c2dce469661686d596


const urlAPI = `https://gateway.marvel.com/v1/public/`;
const apikey = `a00f5f0062160170faeec734efbf8566`;
const ts = 50;
const hash = `92b5384e896f50c2dce469661686d596`;


const sectionContent = document.querySelector('.main_contents__section');

var resultado;

const gerarEndpoint = (valor) => {
  return endpoint = urlAPI
                + valor
                + '?apikey=' + apikey 
                + '&ts=' + ts
                + '&hash=' + hash;

}

async function buscarDados(secao){
  try{
    fetch(gerarEndpoint(secao))
    .then((response) => response.json())
    .then((data) => {
      resultado = data;
    });
  
  }catch(err){
    console.log(err)
  }
}
buscarDados("events");

setTimeout(() => {
  sectionContent.innerHTML = `<h2 class="main_contents__section__header"><svg xmlns="http://www.w3.org/2000/svg"><g data-name="right-arrow (5)"><g data-name="Grupo 15"><path data-name="Caminho 10" d="M13.887 14.722L25.351 3.26a1.412 1.412 0 000-1.993l-.844-.844a1.411 1.411 0 00-1.993 0l-9.628 9.628L3.248.413a1.413 1.413 0 00-1.993 0l-.844.844a1.412 1.412 0 000 1.993l11.475 11.472a1.422 1.422 0 002 0z"/></g></g></svg>Comics</h2>`;
  resultado.data.results.forEach(element => {

    let itemDIV = `<div class="section__item main_contents__section__item__primary-item"> 
                  <img src="${element.thumbnail.path}/portrait_fantastic.${element.thumbnail.extension}" alt="" class="main_contents__section__thumbnail-item">
                  <div style="background: transparent" class="main_contents__section__item__contents-item">${element.title}</div>
                  </div>`;

    sectionContent.innerHTML += itemDIV;
  });
}, 3000)
