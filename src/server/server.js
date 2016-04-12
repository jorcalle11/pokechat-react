import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import http from 'http';
import path from 'path';
import socketIO from 'socket.io';
import dbApi from '../src/db-api';
const port = process.env.PORT || 3000;
const app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(morgan('dev'));
app.use(cors());
console.log(__dirname);
app.use('/', express.static(path.join(__dirname,'..','app')));
app.get('/pokemons', (req,res) => {
  dbApi.pokemons.find((pokemons) => {
    res.json(pokemons);
  });
});

io.on('connection', (socket) => {
  socket.on('message', (msg) => {
    io.emit('message',msg);
  });
});

server.listen(port, () => {
  console.log(`Server running and listening in http://localhost:${port}`);
});
