import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

const DIST_DIR = path.join(__dirname, 'dist');

// Routes
app.use(express.static(DIST_DIR));

// SPA fallback for all remaining routes
app.use((req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
  console.log(`Fichiers statiques depuis: ${DIST_DIR}`);
});
