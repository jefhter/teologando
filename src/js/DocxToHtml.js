const mammoth = require("mammoth");
const fs = require("fs");
const path = require("path");

async function converter() {
    const pastaDocx = path.join(__dirname, '../assets/docs/');
    const pastaHtml = path.join(__dirname, '../assets/articles/');
    const pastaUltimo = path.join(__dirname, '../components');
    
    const arquivos = fs.readdirSync(pastaDocx);

    for (const arquivo of arquivos) {
        const caminhoDocx = path.join(pastaDocx, arquivo);
        const caminhoHtml = path.join(pastaHtml, arquivo+'.html');
        const caminhoUltimo = path.join(pastaUltimo, arquivo+'.html');

        try {
            const result = await mammoth.convertToHtml({ path: caminhoDocx });
            if (arquivo == 'ultimo'){
                fs.writeFileSync(caminhoUltimo, result.value);
            } else{
                fs.writeFileSync(caminhoHtml, result.value);
            }
        } catch (erro) {
            console.error(`Erro ao converter ${arquivo}:`, erro);
        }
    }
}

module.exports = { converter };