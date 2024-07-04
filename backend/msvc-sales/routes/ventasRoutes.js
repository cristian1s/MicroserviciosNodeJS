const express = require('express');
const router = express.Router();
const salesController = require('../controllers/ventacontroller');

router.post('/ventas', salesController.createSale);
router.get('/ventas', salesController.obtenerVentas);
router.get('/ventas/:id', salesController.obtenerVentaPorId);
router.delete('/ventas/:id', salesController.deleteSale);

module.exports = router;
