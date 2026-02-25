require('dotenv').config();
const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');


const KEY_FILE_PATH = path.join(process.env.GOOGLE_KEYFILE);
const SCOPES = ['https://www.googleapis.com/auth/drive.readonly'];
const FOLDER_ID = process.env.GOOGLE_FOLDER_ID;
const PASTA_DESTINO = path.join(__dirname, '../assets/docs/')

// Autenticação
const auth = new google.auth.GoogleAuth({
    keyFile: KEY_FILE_PATH,
    scopes: SCOPES,
});

const drive = google.drive({ version: 'v3', auth });

async function baixarBuffersDrive() {
    try {
            let arquivos = [];
            let pageToken = null;

            let caminhoCompleto = ``;

            let ultimoEncontrado = false;

            do {
                const res = await drive.files.list({
                    q: `'${FOLDER_ID}' in parents and mimeType = 'application/vnd.google-apps.document' and trashed = false`,
                    fields: 'nextPageToken, files(id, name, modifiedTime)',
                    pageSize: 100,
                    pageToken: pageToken 
                });
                arquivos.push(...res.data.files);
                pageToken = res.data.nextPageToken; 

            } while (pageToken);

            if (arquivos.length === 0) {
                console.log('No files.');
                return;
            }

            for (let arquivo of arquivos) {
                // Download Buffer
                const response = await drive.files.export(
                    { 
                        fileId: arquivo.id, 
                        mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' 
                    },
                    { responseType: 'arraybuffer' }
                );

                // Salva o arquivo localmente
                if (!fs.existsSync(PASTA_DESTINO)){
                    fs.mkdirSync(PASTA_DESTINO, { recursive: true });
                }
                
                caminhoCompleto = path.join(PASTA_DESTINO, arquivo.name);
                fs.writeFileSync(caminhoCompleto, Buffer.from(response.data));

                if(arquivo.id = arquivos[0].id && !ultimoEncontrado){
                    caminhoCompleto = path.join(PASTA_DESTINO, `ultimo`);
                    fs.writeFileSync(caminhoCompleto, Buffer.from(response.data));
                    ultimoEncontrado = true;
                }
            } 
        }

        catch (error) {
            console.error('Erro na operação:', error.message);
        }
}

module.exports = { baixarBuffersDrive };