const Clients = require('../models/clients');

const getAllClients = async (req, res) => {
  try {
    const clients = await Clients.findAll();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getClientsById = async (req, res) => {
  try {
    const clients = await Clients.findByPk(req.params.id);
    if (clients) {
      res.json(clients);
    } else {
      res.status(404).json({ error: 'Clients not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createClients = async (req, res) => {
  try {
    const clients = await Clients.create(req.body);
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateClients = async (req, res) => {
  try {
    const [updated] = await Clients.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedClients = await Clients.findByPk(req.params.id);
      res.json(updatedClients);
    } else {
      res.status(404).json({ error: 'Clients not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteClients = async (req, res) => {
  try {
    const deleted = await Clients.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Clients not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllClients,
  getClientsById,
  createClients,
  updateClients,
  deleteClients,
};
