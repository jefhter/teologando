import { Artigo } from './models/Article.js';

function novoArtigo() {
    const titulo = document.getElementById('inputTitulo').value;
    const conteudo = document.getElementById('inputConteudo').value;

    if (titulo && conteudo) {
        const artigo = new Artigo(titulo, conteudo);
        localStorage.setItem(artigo.titulo, artigo.conteudo);
        alert('Artigo salvo com sucesso!');
    } else {
        alert('Preencha todos os campos!');
    }
}

function buscaArtigo(titulo) {
    const artigo = localStorage.getItem(titulo);
    console.log(artigo);
}

function removeArtigo(titulo) {
    const titulo = document.getElementById('inputTitulo').value;
    localStorage.removeItem(titulo);
    alert('Artigo removido!');
}

document.addEventListener('DOMContentLoaded', () => {
    const salvar = document.getElementById('btnSalvar');
    const buscar = document.getElementById('btnBuscar');
    const remover = document.getElementById('btnRemover');

    if (salvar) {
        salvar.addEventListener('click', novoArtigo);
    }
    if (buscar) {
        buscar.addEventListener('click', buscaArtigo);
    }
    if (remover) {
        remover.addEventListener('click', removeArtigo);
    }
});