'use strict';

import seq from 'sequelize';
const { Sequelize, DataTypes } = seq;

const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/dev');

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

const Visit = sequelize.define('visit', {
  total: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
    timestamps: false
});

sequelize.sync();

export const totalVisit = await Visit.create({ total: 0 });
