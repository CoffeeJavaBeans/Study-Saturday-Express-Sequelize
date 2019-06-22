'use strict';

const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define('Student', {
  firstName: { type: Sequelize.STRING, allowNull: false },
  lastName: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING }
});

module.exports = Student;
