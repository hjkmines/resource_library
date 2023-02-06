const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config({path: './config/config.env'});

connectDB();

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 5001;

app.use(logger);

const server = app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

process.on(unhandledRejection, (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
})