const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: DataTypes.STRING,
    caracteristicas: DataTypes.STRING,
    precio: DataTypes.FLOAT,
    stock: DataTypes.INTEGER,
    estado: DataTypes.STRING,
    subcategoria_id: DataTypes.INTEGER,
    marca_id: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: 'Product',
    tableName: 'tb_productos', 
    timestamps: false,
  }
);

module.exports = Product;
