// models/Employee.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // Create a database connection

const Employee = sequelize.define('Employee', {
  id: {
    type: DataTypes.UUID, // Use UUID for an auto-generated identifier
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4, // Auto-generate a UUID
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false, // Last name is required
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false, // First name is required
  },
  dateCreated: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW, // Set automatically to the current date and time
  },
  checkInTime: {
    type: DataTypes.DATE,
    allowNull: true, // Can be null
  },
  checkOutTime: {
    type: DataTypes.DATE,
    allowNull: true, // Can be null
  },
  checkOutComment: {
    type: DataTypes.STRING, 
    allowNull: true, // Can be null
  },
  department: {
    type: DataTypes.STRING,
    allowNull: false, // Department is required
  },
});

module.exports = Employee;
