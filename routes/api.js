// routes/api.js
const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Ruta para obtener la columna ssi_nombre de la tabla sist_institucion_sede
router.get('/instituciones', (req, res) => {
  db.query('SELECT ssi_nombre FROM sist_institucion_sede', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Nueva ruta para obtener datos relacionados
router.get('/institucion-programa', (req, res) => {
  const query = `
    SELECT 
      si.si_nombre, si.si_ubicacion, 
      ssi.ssi_nombre, ssi.ssi_ubicacion, 
      cpe.cpe_clavepe, cpe.cpe_nombre, cpe.cpe_estadope, cpe.cpe_nivel, cpe.cpe_modalidad, cpe.cpe_opciones, cpe.cpe_periodicidad
    FROM 
      institucion_programa_educativo ip
    JOIN 
      sist_institucion si ON ip.si_cct = si.si_cct
    JOIN 
      sist_institucion_sede ssi ON ip.ssi_cct = ssi.ssi_cct
    JOIN 
      cat_programa_educativo cpe ON ip.cpe_id = cpe.cpe_id
  `;

  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

module.exports = router;