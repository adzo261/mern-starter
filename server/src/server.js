import express from 'express';
import path from 'path';

const app = express();

const DIST_DIR = path.join('../', 'client', 'dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(express.static(DIST_DIR));

app.get('/', (req, res) => {
  res.sendFile(HTML_FILE); // EDIT
});

export default app;
