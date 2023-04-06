const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });
const express = require('express');
const connectDB = require('./config/database');
const logger = require('./utils/logger');
const errorHandler = require('./utils/error')
const event = require('./routes/event')
const bodyParser = require('body-parser')
const media = require('./routes/media')
const userRouter = require('./routes/userRouter');
const cors = require('cors');

const app = express();

// Connect to database
connectDB();

app.use(express.json());

const PORT = process.env.PORT || 5001;

// Use CORS
app.use(cors());

// Use routes
app.use('/users', userRouter);

app.use(logger)
app.use(errorHandler)
// app.use('/user', user)
app.use('/media', media)

const server = app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});

process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
