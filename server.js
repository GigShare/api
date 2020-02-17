const http = require('http');
const app = require('./app');
//setting up port
const port = process.env.PORT || 8000;

const server = http.createServer(app);
//let the server lissen to port 8000
server.listen(port);

console.log('We runnin on http://localhost:' + port);
