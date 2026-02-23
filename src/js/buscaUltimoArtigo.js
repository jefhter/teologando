require('dotenv').config();
const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');


const KEY_FILE_PATH = path.join(process.env.GOOGLE_KEYFILE);
const SCOPES = ['https://www.googleapis.com/auth/drive.readonly'];
const FOLDER_ID = process.env.GOOGLE_FOLDER_ID;
const PASTA_DESTINO = path.join(__dirname, '../../docs/')

// Autenticação
const auth = new google.auth.GoogleAuth({
    keyFile: KEY_FILE_PATH,
    scopes: SCOPES,
});

const drive = google.drive({ version: 'v3', auth });

async function baixarUltimoDocx() {
    try {
        // Busca o último arquivo modificado dentro da pasta (pasta pai, tipo .docx e que não esteja na lixeira)
        const lista = await drive.files.list({
            q: `'${FOLDER_ID}' in parents and mimeType = 'application/vnd.google-apps.document' and trashed = false`,
            orderBy: 'modifiedTime desc',
            pageSize: 1,
            fields: 'files(id, name, modifiedTime)',
        });

        const arquivos = lista.data.files;

        if (arquivos.length === 0) {
            console.log('No files.');
            return;
        }

        const arquivoAlvo = arquivos[0];

        // Download do conteúdo (Buffer)
        const response = await drive.files.export(
            { 
                fileId: arquivoAlvo.id, 
                mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' 
            },
            { responseType: 'arraybuffer' }
        );

        // Salvar o arquivo localmente

        if (!fs.existsSync(PASTA_DESTINO)){
            fs.mkdirSync(PASTA_DESTINO, { recursive: true });
        }

        const nomeArquivoLocal = `ultimo`;
        const caminhoCompleto = path.join(PASTA_DESTINO, nomeArquivoLocal);

        fs.writeFileSync(caminhoCompleto, Buffer.from(response.data));
    } catch (error) {
        console.error('Erro na operação:', error.message);
    }
}

// Executa a função
baixarUltimoDocx();