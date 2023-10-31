// database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('yassir','mohamed', 'medmedmed'  ,{
  host: 'database-host', // Replace with your MySQL server host
  dialect: 'mysql',
});

module.exports = sequelize;
