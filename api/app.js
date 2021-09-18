'use strict';

import express from 'express';
import cookieParser from 'cookie-parser';

import { counter } from './queries.js';

const app = express();
app.use(cookieParser());

const port = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello from the other side!');
  res.end();
});

app.get('/counter', (req, res) => counter(req, res));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});