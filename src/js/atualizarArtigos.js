const { baixarBuffersDrive } = require('./buscaArtigos');
const { converter } = require('./DocxToHtml');

async function atualizarArtigos() {
    console.log("Iniciando processo...");
    await baixarBuffersDrive();
    await converter();
    console.log("Tudo pronto!");
}

atualizarArtigos();