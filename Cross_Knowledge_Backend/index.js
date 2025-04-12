const express = require('express');
require('dotenv').config();
const { Server } = require('socket.io');
const http = require('http');

const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { ConnectionDB } = require('./db.config');
const path = require('path');


const discussionRouter = require('./src/routers/discussionRoutes');


const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

const authRouter = require('./src/routers/authRouter');
const learningPostRouter = require('./src/routers/productPostRoutes')
const marketplaceRoutes = require('./src/routers/marketplaceRoutes');
const reviewRoutes = require('./src/routers/reviewRoutes');
const chatRouter = require('./src/routers/chatRoutes');




app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/auth', authRouter);
app.use('/api/mentership', learningPostRouter)
app.use('/api/uploads', learningPostRouter);
app.use('/api/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/discussions', discussionRouter);
app.use('/api/marketplace', marketplaceRoutes);
app.use('/api/product', reviewRoutes);
app.use('/api/chat', chatRouter);

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


io.on('connection', (socket) => {
    console.log(`🟢 Socket connected: ${socket.id}`);
  
    socket.on('joinConversation', (conversationId) => {
      socket.join(conversationId);
      console.log(`Socket ${socket.id} joined conversation: ${conversationId}`);
    });
  
    socket.on('sendMessage', ({ conversationId, message }) => {
      io.to(conversationId).emit('newMessage', message);
    });
  
    socket.on('disconnect', () => {
      console.log(`🔴 Socket disconnected: ${socket.id}`);
    });
  });
  

  server.listen(process.env.PORT, async () => {
    await ConnectionDB();
    console.log(`🚀 Server is running on port ${process.env.PORT}`);
});