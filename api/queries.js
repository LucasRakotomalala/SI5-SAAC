'use strict';

import pg from 'pg';
import { v4 as uuidv4 } from 'uuid';

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/dev',
  ssl: (process.env.NODE_ENV !== 'production') ? false : {
    rejectUnauthorized: false
  }
});

const incrementVisit = async () => {
  try {
    await pool.query('UPDATE visits SET total = total + 1;');
  } catch (err) {
    throw err;
  }
};

const retrieveTotalVisit = async () => {
  try {
    return await pool.query('SELECT * FROM visits;');
  } catch (err) {
    throw err;
  }
};

export const counter = async (req, res) => {
  if (!req.cookies.uid) {
    await incrementVisit();
    res.cookie('uid', uuidv4());
  }
  const response = await retrieveTotalVisit();
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write(`Hello World! You're the ${response.rows[0].total} visitors!`);
  res.end();
};