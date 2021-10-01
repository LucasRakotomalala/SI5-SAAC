'use strict';

import seq from 'sequelize';
const { Sequelize, DataTypes } = seq;

const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/dev',
{
  dialect: 'postgres',
  // ssl: process.env.NODE_ENV === 'production',
  dialectOptions: {
    ssl: (process.env.NODE_ENV !== 'production') ? false : {
      'require': true,
      'rejectUnauthorized': false
    }
  }
});

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
