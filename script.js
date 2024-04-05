const containerVideos = document.querySelector(".videos__container");

async function buscarEMostrarVideos() { 
   try{
      const busca = await fetch("http://localhost:3000/videos")
      const videos = await busca.json();
            videos.forEach((video) => {
               if(video.categoria == "") {
                  throw new Error('Vídeo não tem categoria.')
               }
               containerVideos.innerHTML += `
                  <li class="videos__item">
                     <iframe src="${video.url}" title="${video.titulo}" frameborder="" allowfullscreen></iframe>
                     <div class="descricao-video">
                        <img class="img-canal" src="${video.imagem}" alt="logo do canal">
                        <h3 class="titulo-video">${video.titulo}</h3>
                        <p class="titulo-canal">${video.descricao}</p>
                     </div>
                  </li>
               `;
            })
   } catch(error){
      containerVideos.innerHTML = `<p>Houve um erro: ${error}</p>`
   }
}

buscarEMostrarVideos();

const barraDePesquisa = document.querySelector('.pesquisar__input');

barraDePesquisa