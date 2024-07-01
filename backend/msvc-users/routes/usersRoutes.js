const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/users', usersController.getAllusers);
router.get('/users/:id', usersController.getUsersById);
router.post('/users', usersController.createUsers);
router.put('/users/:id', usersController.updateUsers);
router.delete('/users/:id', usersController.deleteUsers);
router.post('/users/validate', usersController.validateUser);
router.post('/users/getUser', usersController.getUser);

module.exports = router;
