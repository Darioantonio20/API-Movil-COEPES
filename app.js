// app.js
const express = require('express');
const app = express();
const apiRoutes = require('./routes/api');

// Middleware para parsear JSON
app.use(express.json());

// Middleware de registro
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Rutas de la API
app.use('/api', apiRoutes);

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});