const { baixarUltimoDocx } = require('./buscaUltimoArtigo');
const { converter } = require('./converteDocx');

async function run() {
    console.log("Iniciando processo...");
    await baixarUltimoDocx();
    await converter();
    console.log("Tudo pronto!");
}

run();