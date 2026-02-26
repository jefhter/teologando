// const content = localStorage.getItem('content');

// document.addEventListener('submit', () => {
//     const content = document.getElementsByName('content').value;
//     localStorage.setItem('dadosPost', content);
// });

// const params = new URLSearchParams(window.location.search);
// const content = params.get("content");

// const form = document.querySelector('form');

// form.addEventListener('submit', () => {
//     // const valor = document.getElementsByName('content').value;
//     // localStorage.setItem('dadosPost', valor);

    
//     const content = new FormData(meuForm).get("content");
//     console.log("Capturado via POST:", content);
// });

const content = localStorage.getItem('dadosPost');

console.log(content);

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

