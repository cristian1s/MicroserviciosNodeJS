require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const clientsRoutes = require('./routes/clientsRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Usar las rutas de clientes
app.use('/api', clientsRoutes);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Clients service running on port ${port}`);
  });
});
