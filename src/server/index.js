const express = require('express');
const http = require('http');
const router = require('./router');

const PORT = 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const server = http.createServer(app);

// const clientRoutes = Router();

server.listen(PORT, () => {
  console.log(`Server now listening on port: ${PORT}`);
})