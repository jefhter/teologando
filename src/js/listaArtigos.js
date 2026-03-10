function loadJson(filePath){
    fetch(filePath)
    .then(response => response.json())
    .then(dados => {
        const container = document.getElementById('lista-artigos');

        dados.artigos.forEach(artigo => {
        const li = document.createElement('li');
        
        li.textContent = `${artigo.name} - ${artigo.modifiedTime}`;
        
        container.appendChild(li);
        });
    })
    .catch(error => console.error('Erro ao carregar o JSON:', error));
}

document.addEventListener('DOMContentLoaded', () => {
    loadJson('./artigos.json');
});