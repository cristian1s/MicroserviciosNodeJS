// index.js
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const sequelize = require('./config/database');
const dashboardRoutes = require('./routes/dashboardRoutes');

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const port = process.env.PORT || 3000;

// Test DB connection
sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

app.use('/api/reports/dashboard', dashboardRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
