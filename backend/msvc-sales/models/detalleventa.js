const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Venta = require('./venta');

const DetalleVenta = sequelize.define('DetalleVenta', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  ventaId: {
    type: DataTypes.INTEGER,
    references: {
      model: Venta,
      key: 'id',
    },
    allowNull: false,
  },
  productoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  precio_unitario: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  subtotal: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  tableName: 'tb_detalle_ventas',
  timestamps: false,
});

Venta.hasMany(DetalleVenta, { foreignKey: 'ventaId' });
DetalleVenta.belongsTo(Venta, { foreignKey: 'ventaId' });

module.exports = DetalleVenta;
