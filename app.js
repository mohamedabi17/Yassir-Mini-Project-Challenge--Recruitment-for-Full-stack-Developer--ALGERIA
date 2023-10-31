// app.js
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database');
const Employee = require('./models/Employee');

const app = express();
app.use(bodyParser.json());


// Create an employee
app.post('/employees', async (req, res) => {
  try {
    const { lastName, firstName, department } = req.body;

    // Create a new employee in the database
    const employee = await Employee.create({ lastName, firstName, department });

    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create employee' });
  }
});


// Get a list of employees with optional date filter
app.get('/employees', async (req, res) => {
  try {
    const dateFilter = req.query.dateCreated || null;
    const employees = await Employee.findAll({ where: { dateCreated: dateFilter } });
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch employees' });
  }
});

// Add a check-in
app.post('/check-in', async (req, res) => {
  const { employeeId, comment } = req.body;

  // Fetch the employee from the database using employeeId
  const employee = await Employee.findOne({ where: { id: employeeId } });

  if (!employee) {
    return res.status(404).json({ error: 'Employee not found' });
  }

  // Save the check-in time and comment to the database
  const checkInTime = new Date();
  employee.checkInTime = checkInTime;
  employee.checkInComment = comment;

  await employee.save();

  res.status(200).json({ message: 'Check-in successful' });
});

// Add a check-out
app.post('/check-out', async (req, res) => {
  const { employeeId, comment } = req.body;

  // Fetch the employee from the database using employeeId
  const employee = await Employee.findOne({ where: { id: employeeId } });

  if (!employee) {
    return res.status(404).json({ error: 'Employee not found' });
  }

  // Save the check-out time and comment to the database
  const checkOutTime = new Date();
  employee.checkOutTime = checkOutTime;
  employee.checkOutComment = comment;

  await employee.save();

  res.status(200).json({ message: 'Check-out successful' });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
