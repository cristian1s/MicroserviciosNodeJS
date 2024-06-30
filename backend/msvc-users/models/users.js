const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Users extends Model {}

Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true, 
      primaryKey: true,
    },
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    correo: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    estado: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'Users',
    tableName: 'tb_usuarios', 
    timestamps: false,
  }
);

module.exports = Users;
