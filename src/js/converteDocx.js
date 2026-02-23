const mammoth = require("mammoth");
const fs = require("fs");
const path = require("path");

async function converter() {
    const caminhoDocx = path.join(__dirname, '../../docs/ultimo');
    const caminhoHtml = path.join(__dirname, '/../components/ultimo.html');

    const result = await mammoth.convertToHtml({ path: caminhoDocx });
    
    // Salvamos apenas o "miolo" do HTML (sem <html> ou <body>)
    fs.writeFileSync(caminhoHtml, result.value); 
    console.log("✅ HTML gerado para o fetch!");
}

converter()