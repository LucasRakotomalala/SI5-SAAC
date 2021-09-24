'use strict';

import { v4 as uuidv4 } from 'uuid';
import { totalVisit } from './model.js';

const incrementVisit = async () => {
  await totalVisit.increment('total', { by: 1 });
};

const retrieveTotalVisit = async () => {
  return await totalVisit.total;
};

export const counter = async (req, res) => {
  if (!req.cookies.uid) {
    await incrementVisit();
    res.cookie('uid', uuidv4());
  }
  const visitorsNumber = await retrieveTotalVisit();
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write(`Hello World! You're our ${visitorsNumber} unique visitors!`);
  res.end();
};