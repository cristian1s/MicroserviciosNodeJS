const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Clients extends Model {}

Clients.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true, 
      primaryKey: true,
    },
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    correo: DataTypes.STRING,
    direccion: DataTypes.STRING,
    estado: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'Clients',
    tableName: 'tb_clientes', // Especificar el nombre de la tabla
    timestamps: false, // Si no tienes columnas createdAt y updatedAt
  }
);

module.exports = Clients;
