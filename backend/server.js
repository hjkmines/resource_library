
const express = require('express'); // Import express web application framework
const dotenv = require('dotenv'); // zero dependency module to read environment variables from .env file into process.env
const connectDB = require('./config/database') // Import database connection
const logger = require('./utils/logger')
const errorHandler = require('./utils/error')
// const event = require('./routes/event')
const bodyParser = require('body-parser')
const media = require('./routes/media')

// const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });
// const express = require('express');
// const connectDB = require('./config/database');
// const logger = require('./utils/logger');
const userRoutes = require('./routes/userRoutes');


const app = express();

// Connect to database
connectDB();

app.use(express.json());


app.use(bodyParser.json());

const PORT = process.env.PORT || 5001;


// Use routes
app.use('/users', userRoutes);


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
