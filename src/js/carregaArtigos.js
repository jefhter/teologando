// const fs = require("fs");
// const path = require("path");

// const pastaHtml = path.join(__dirname, '../assets/articles/');
// const listaDeArtigos = fs.readdirSync(pastaHtml);

// function carrega() {
//     const container = document.getElementById('lista-artigos');
//     container.innerHTML = ''; // Limpa o "Carregando..."

//     listaDeArtigos.forEach(arquivo => {
//         // Cria o elemento de artigo
//         const article = document.createElement('article');
//         article.className = 'card-artigo';

//         // Estrutura interna do card baseada nos dados do arquivo do Drive
//         article.innerHTML = `
//             <div class="card-content">
//                 <span class="categoria">Teologia</span>
//                 <h2 class="titulo-artigo">${arquivo.name}</h2>
//                 <p class="resumo">Publicado em: ${new Date(arquivo.createdTime).toLocaleDateString()}</p>
//                 <a href="https://drive.google.com/file/d/${arquivo.id}/view" target="_blank" class="btn-ler">
//                     Abrir Estudo
//                 </a>
//             </div>
//         `;
        
//         container.appendChild(article);
//     });
// }

// carrega();




const params = new URLSearchParams(window.location.search);
const content = params.get("content");

function loadArticle(elementId, filePath, article=content){
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao carregar o componente: ${response.statusText}`);
            }
            return response.text();
        })
        .then(html => {
            const targetElement = document.getElementById(elementId);
            if (targetElement) {
                targetElement.innerHTML = html;
            } else {
                console.error(`Elemento de destino não encontrado: #${elementId}`);
            }
        })
        .catch(error => {
            console.error('Falha ao carregar o componente:', error);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    loadArticle('article-placeholder', `https://jefhter.github.io/teologando//src/assets/articles/${content}.html`);
});

