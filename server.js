import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Dossiers clés
const DIST_DIR = path.join(__dirname, 'dist');
const VOLUME_PATH = '/app/data';

// Initialise le volume avec les assets critiques si manquants
const initializeVolume = () => {
  if (!fs.existsSync(VOLUME_PATH)) {
    fs.mkdirSync(VOLUME_PATH, { recursive: true });
  }

  const filesToSync = ['logo.png', 'Altinus - Executive Summary - V2.pdf'];

  filesToSync.forEach((file) => {
    const sourcePath = path.join(DIST_DIR, 'ressources', file);
    const destPath = path.join(VOLUME_PATH, file);

    if (fs.existsSync(sourcePath) && !fs.existsSync(destPath)) {
      fs.copyFileSync(sourcePath, destPath);
    }
  });
};

if (fs.existsSync(DIST_DIR)) {
  initializeVolume();
}

// Routes
app.use('/ressources', express.static(VOLUME_PATH));
app.use(express.static(DIST_DIR));

// SPA fallback for all remaining routes
app.use((req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
  console.log(`Fichiers statiques depuis: ${DIST_DIR}`);
  console.log(`Volume servi sur /ressources depuis: ${VOLUME_PATH}`);
});
