// src/js/modules.js

// Função genérica para carregar um componente HTML
function loadComponent(elementId, filePath) {
    // 1. Usa o Fetch API para ler o conteúdo do arquivo
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                // Lidar com erros de rede ou arquivo não encontrado
                throw new Error(`Erro ao carregar o componente: ${response.statusText}`);
            }
            return response.text();
        })
        .then(html => {
            // 2. Encontra o elemento de destino no HTML principal
            const targetElement = document.getElementById(elementId);
            if (targetElement) {
                // 3. Insere o conteúdo HTML no elemento
                targetElement.innerHTML = html;
            } else {
                console.error(`Elemento de destino não encontrado: #${elementId}`);
            }
        })
        .catch(error => {
            console.error('Falha ao carregar o componente:', error);
        });
}

// 4. Carrega os componentes nos seus respectivos IDs
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('header-placeholder', '/src/components/header.html');
    loadComponent('footer-placeholder', '/src/components/footer.html');
});