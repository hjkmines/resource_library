const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });
const express = require('express');
const connectDB = require('./config/database');
const logger = require('./utils/logger');
const userRouter = require('./routes/userRouter');

const app = express();

// Connect to database
connectDB();

app.use(express.json());

const PORT = process.env.PORT || 5001;

// Use routes
app.use('/users', userRouter);

const server = app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});

process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});