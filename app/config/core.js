'use strict';

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173"
];

const config = {
  origin: (ctx) => {
    const requestOrigin = ctx.request.header.origin;

    if (allowedOrigins.includes(requestOrigin)) {
      return requestOrigin;
    }

    return ""; // block other origins
  },
  methods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH', 'OPTIONS']
};

module.exports = config;