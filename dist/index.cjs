'use strict';

const http = require('http');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e["default"] : e; }

const http__default = /*#__PURE__*/_interopDefaultLegacy(http);

const server = http__default.createServer((_, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});
server.listen(3e3);
