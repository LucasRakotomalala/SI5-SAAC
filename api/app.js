'use strict';

import express from 'express';

import { incrementVisit } from './queries.js';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello World!');
  res.end();
});

app.get('/counter', incrementVisit);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});