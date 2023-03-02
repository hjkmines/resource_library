const express = require('express'); // Import express web application framework
const dotenv = require('dotenv'); // zero dependency module to read environment variables from .env file into process.env
const connectDB = require('./config/database') // Import database connection
const logger = require('./utils/logger')
// const user = require('./routes/user');
// const bodyParser = require('body-parser')

dotenv.config({ path: './config/config.env' })

connectDB(); 

const app = express(); //initialize express app

// app.use(bodyParser.json());

const PORT = process.env.PORT || 5001; //creating a port. Read from config folder, if not then use 5001

app.use(logger)
// app.use('/user', user)

const server = app.listen(PORT, () => { //initialize server application to run
    console.log(`Server is listening on PORT ${PORT}`) //confirmation message
})

process.on('unhandledRejection', (err) => { //handling unhandled promise rejection. whenever node sees an error it needs this to "gracefully shutdown" server 
    console.log(`Error: ${err.message}`)
    server.close(() => process.exit(1)) //terminates the node terminal synchronously-(1) indicates failure
})