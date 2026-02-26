// SE O GITHUB-PAGES PERMITISSE USAR 
// METODO POST:

// EM UM LISTENER.JS
// const form = document.querySelector('form');
// form.addEventListener('submit', () => {    
//     const content = new URLSearchParams(new FormData(form)).get("content");
//     localStorage.setItem('dados', content);
// });

// AQUI
// const content = localStorage.getItem('dados', content);
// ...

const params = new URLSearchParams(window.location.search);
const content = params.get("content");

function loadArticle(elementId, filePath){
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

