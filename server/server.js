const Koa = require('koa');

const { createServer } = require('http');
const { Server } = require('socket.io');

const app = new Koa();
const httpServer = createServer(app.callback());
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:3002',
  },
});

io.on('connection', (socket) => {
  console.log('server connection');

  socket.on('left', () => {
      console.log('left');
      io.emit('left');
  })
  socket.on('right', () => {
      console.log('right');
      io.emit('right');
  })
  socket.on('rotate', () => {
      console.log('rotate');
      io.emit('rotate');
  })
  socket.on('moveDown', () => {
      console.log('moveDown');
      io.emit('moveDown')
  })
  socket.on('initSelfGame', (info) => {
      console.log('initSelfGame');
      io.emit('initSelfGame', info)
  })
  socket.on('createBox', (info) => {
      console.log('createBox');
      io.emit('createBox',info)
  })
});
httpServer.listen(3002)
