'use strict';

import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  database: process.env.DB_HOST || 'td_1',
  user: process.env.DB_USER || 'si5_sacc',
  password: process.env.DB_PASSWORD ||'dev_password',
  host: process.env.DB_URL || '127.0.0.1',
  port: process.env.DB_PORT || 5432,
});

export const incrementVisit = async (req, res) => {
  // Update the visit counter
  try {
    await pool.query('UPDATE visits SET total = total + 1;');
  } catch (err) {
    throw err;
  }

  // console.log('Visit counter updated!');

  // Retrieve the visit counter
  try {
    const response = await pool.query('SELECT * FROM visits;');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(`Hello World! You're the ${response.rows[0].total} visitors!`);
    res.end();
  } catch (err) {
    throw err;
  }
};