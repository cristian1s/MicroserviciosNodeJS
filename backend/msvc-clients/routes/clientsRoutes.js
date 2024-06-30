const express = require('express');
const router = express.Router();
const clientsController = require('../controllers/clientsController');

router.get('/clients', clientsController.getAllClients);
router.get('/clients/:id', clientsController.getClientsById);
router.post('/clients', clientsController.createClients);
router.put('/clients/:id', clientsController.updateClients);
router.delete('/clients/:id', clientsController.deleteClients);

module.exports = router;
