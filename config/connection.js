const { QueryTypes, Sequelize, DataTypes } = require("sequelize");
const config = require('../config/config')

var sequelize = new Sequelize(
    config.development.database, 
    config.development.username, 
    config.development.password, {
        host: config.development.host,
        dialect: config.development.dialect
        }
    );

const test = sequelize.authenticate().then(() => {
  console.log('connection successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

module.exports = {
  sequelize,
  QueryTypes,
  Sequelize,
  DataTypes
}
