function loadJson(filePath) {
    fetch(filePath)
    .then(response => {
        if (!response.ok) throw new Error('Erro ao baixar arquivo: ' + response.status);
        return response.json();
    })
    .then(dados => {
        const container = document.getElementById('tabela-artigos');
        if (!container) return console.error("Elemento 'lista-artigos' não encontrado no HTML");

        const lista = dados.artigos || dados;

        if (Array.isArray(lista)) {
            lista.forEach(artigo => {
                const tr = document.createElement('tr');
                const tdNome = document.createElement('td');
                const tdData = document.createElement('td');
                
                let data = new Date(artigo.modifiedTime).toLocaleDateString('pt-BR');

                tdNome.textContent = `${artigo.name}`;
                tdData.textContent = `${data}`;

                tr.appendChild(tdNome);
                tr.appendChild(tdData);
                container.appendChild(tr);
            });
        } else {
            console.error("O formato do JSON não é um array reconhecível.");
        }
    })
    .catch(error => console.error('Erro ao carregar o JSON:', error));
}

document.addEventListener('DOMContentLoaded', () => {
    loadJson('https://jefhter.github.io/teologando/src/js/artigos.json');
});