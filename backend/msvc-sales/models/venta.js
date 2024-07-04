const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Venta = sequelize.define('Venta', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  cliente: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  total: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  tableName: 'tb_ventas',
  timestamps: false,
});


module.exports = Venta;
