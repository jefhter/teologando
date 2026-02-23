// NAO UTILIZADA AINDA

async function carregarArtigo(nome) {
    try {
        // O fetch busca o arquivo que o Node.js gerou
        const response = await fetch('../assets/articles/${nome}.html');
        const htmlTexto = await response.text();

        // Injeta o HTML dentro da tag article
        document.getElementById('conteudo-dinamico').innerHTML = htmlTexto;
    } catch (error) {
        console.error("Erro ao carregar o artigo:", error);
        document.getElementById('conteudo-dinamico').innerHTML = "Erro ao carregar o conteúdo.";
    }
}

// Chama a função ao carregar a página
carregarArtigo();