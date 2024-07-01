const Users = require('../models/users');

const getAllusers = async (req, res) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUsersById = async (req, res) => {
  try {
    const users = await Users.findByPk(req.params.id);
    if (users) {
      res.json(users);
    } else {
      res.status(404).json({ error: 'users not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createUsers = async (req, res) => {
  try {
    const users = await Users.create(req.body);
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUsers = async (req, res) => {
  try {
    const [updated] = await Users.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedusers = await Users.findByPk(req.params.id);
      res.json(updatedusers);
    } else {
      res.status(404).json({ error: 'users not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUsers = async (req, res) => {
  try {
    const deleted = await Users.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'users not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const validateUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await Users.findOne({ where: { username, password } });
    if (user) {
      res.json({ valid: true, user });
    } else {
      res.json({ valid: false });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const query = req.query;
    const user = await Users.findOne({ where: query });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = {
  getAllusers,
  getUsersById,
  createUsers,
  updateUsers,
  deleteUsers,
  validateUser,
  getUser,
};
