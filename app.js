'use strict';

import { createServer } from 'http';

const port = process.env.PORT || 3000;

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello World!');
  res.end();
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});