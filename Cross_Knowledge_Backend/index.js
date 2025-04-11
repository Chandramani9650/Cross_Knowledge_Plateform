const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { ConnectionDB } = require('./db.config');
require('dotenv').config();

const app = express();
const authRouter = require('./src/routers/authRouter');

app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/auth', authRouter);

/*
const startServer = async () => {
  try {
    await ConnectionDB();
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`🚀 Server is running on port ${port}`);
    });
  } catch (err) {
    console.error('❌ Failed to start server:', err);
  }
};

startServer();
*/
app.listen(process.env.PORT, async ()=>{
    await ConnectionDB()
    console.log(`Server is running on port ${process.env.PORT}`);
})
