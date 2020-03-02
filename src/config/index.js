"use strict";
exports.__esModule = true;
var dev = process.env.NODE_ENV !== 'production';
exports.clientUrl = dev ? 'http://localhost:9000' : 'https://my_deployed_domain.com';
exports.server = dev ? 'http://localhost:8080' : 'https://my_deployment.server.com';
