// routes/reportRoutes.js
const express = require('express');
const router = express.Router();
const { getTopProducts, getTopClients } = require('../controllers/dashboardController');

router.get('/top-products', getTopProducts);
router.get('/top-clients', getTopClients);

module.exports = router;
