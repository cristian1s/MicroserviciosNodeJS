const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/users', usersController.getAllusers);
router.get('/users/:id', usersController.getUsersById);
router.post('/users', usersController.createUsers);
router.put('/users/:id', usersController.updateUsers);
router.delete('/users/:id', usersController.deleteUsers);

module.exports = router;
