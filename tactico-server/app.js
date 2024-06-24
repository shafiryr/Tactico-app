/*const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})*/
const express = require('express');
const app = express();
const server = require('http').createServer(express);
const cors = require('./services/cors.service');
const socket = require('./services/socket.io.service');

app.use(express.json())

//const boardRoutes = require('../board/board.routes');

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.use(cors);
//app.use('/board', boardRoutes);

socket.create(server);

const port = process.env.NODE_PORT || 3000;
server.listen(port, () => console.log(`server started on port ${port}`));
