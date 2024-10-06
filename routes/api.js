// routes/api.js
const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Ruta para obtener los campos de sist_institucion
router.get('/instituciones', (req, res) => {
  const query = `
    SELECT 
      sist_institucion.si_cct,
      sist_institucion.si_nombre, 
      sist_institucion.si_ubicacion, 
      sist_institucion.si_regimen, 
      sist_institucion.si_sostenimiento, 
      sist_institucion.si_acreditacion
    FROM 
      sist_institucion
  `;

  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Nueva ruta para obtener los campos de sist_institucion_sede
router.get('/instituciones_sede', (req, res) => {
  const query = `
    SELECT 
      ssi_nombre, 
      ssi_ubicacion 
    FROM 
      sist_institucion_sede
  `;

  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

module.exports = router;