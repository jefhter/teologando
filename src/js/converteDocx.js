const mammoth = require("mammoth");
const fs = require("fs");
const path = require("path");

async function converter() {
    const caminhoDocx = path.join(__dirname, '../assets/docs/ultimo');
    const caminhoHtml = path.join(__dirname, '/../components/ultimo.html');

    const result = await mammoth.convertToHtml({ path: caminhoDocx });
    fs.writeFileSync(caminhoHtml, result.value); 
}

converter()