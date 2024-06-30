// models/SaleDetail.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Sale = require('./sale');
const Product = require('./product');

const SaleDetail = sequelize.define('SaleDetail', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ventaId: {
    type: DataTypes.INTEGER,
    references: {
      model: Sale,
      key: 'id',
    },
  },
  productoId: {
    type: DataTypes.INTEGER,
    references: {
      model: Product,
      key: 'id',
    },
  },
  precio_unitario: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  subtotal: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
}, {
  tableName: 'tb_detalle_ventas',
});

Sale.hasMany(SaleDetail, { foreignKey: 'ventaId' });
SaleDetail.belongsTo(Sale, { foreignKey: 'ventaId' });

Product.hasMany(SaleDetail, { foreignKey: 'productoId' });
SaleDetail.belongsTo(Product, { foreignKey: 'productoId' });

module.exports = SaleDetail;
