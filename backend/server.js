const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Middleware para servir archivos estáticos del frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Ruta de prueba (API)
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hola desde el backend!' });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
