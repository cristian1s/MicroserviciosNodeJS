require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const usersRoutes = require('./routes/usersRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Usar las rutas de clientes
app.use('/api', usersRoutes);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Users service running on port ${port}`);
  });
});
