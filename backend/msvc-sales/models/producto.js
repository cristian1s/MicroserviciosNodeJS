// models/Producto.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Producto = sequelize.define('Producto', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  caracteristicas: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subcategoriaid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  marcaid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'tb_productos',
  timestamps: false,
});

module.exports = Producto;
