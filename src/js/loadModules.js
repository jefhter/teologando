function loadComponent(elementId, filePath) {
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
    loadComponent('header-placeholder', 'https://jefhter.github.io/teologando//src/components/header.html');
    loadComponent('footer-placeholder', 'https://jefhter.github.io/teologando//src/components/footer.html');
    loadComponent('article-placeholder', 'https://jefhter.github.io/teologando//src/components/ultimo.html');
    loadComponent('style-header', 'https://jefhter.github.io/teologando/src/css/header.css');
    loadComponent('style-footer', 'https://jefhter.github.io/teologando/src/css/footer.css');
});

