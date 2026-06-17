import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// arquivos CSS, imagens, etc.
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/filmes', (req, res) => {
    res.sendFile(path.join(__dirname, 'filmes.html'));
});

app.get('/contato', (req, res) => {
    res.sendFile(path.join(__dirname, 'contato.html'));
});

app.listen(PORT, () => {
    console.log(`SERVIDOR RODANDO EM http://localhost:${PORT}`);
});