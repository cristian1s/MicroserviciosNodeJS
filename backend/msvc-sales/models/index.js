
const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const Cliente = require('./cliente');
const Producto = require('./producto');
const Venta = require('./venta');
const DetalleVenta = require('./detalleventa');

// Definir las asociaciones
Cliente.hasMany(Venta, { foreignKey: 'cliente' });
Venta.belongsTo(Cliente, { foreignKey: 'cliente' });

Producto.hasMany(DetalleVenta, { foreignKey: 'productoId' });
DetalleVenta.belongsTo(Producto, { foreignKey: 'productoId' });

Venta.hasMany(DetalleVenta, { foreignKey: 'ventaId' });
DetalleVenta.belongsTo(Venta, { foreignKey: 'ventaId' });

module.exports = {
  sequelize,
  Cliente,
  Producto,
  Venta,
  DetalleVenta,
};
