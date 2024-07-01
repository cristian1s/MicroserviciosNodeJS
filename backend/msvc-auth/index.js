// index.js
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const port = process.env.PORT || 3000;

app.use('/api/auth', authRoutes);

app.listen(port, () => {
  console.log(`AuthService running on port ${port}`);
});
