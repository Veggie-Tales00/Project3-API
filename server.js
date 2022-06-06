// Require dependencies
require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const cors = require('cors');

// Connections to controller files
const winesController = require('./controllers/winesController')
const dishesController = require('./controllers/dishesController')

// Create express app
const app = express();

// Define Port  This will need to be set in the heroku environment
app.set("PORT", process.env.PORT || 8080);

app.use(cors())

app.use(express.json());

// Use logger middleware
app.use(logger('dev'));

//  Routes
app.use('/wines', winesController)
app.use('/dishes', dishesController)

app.listen(app.get("PORT"), () => {
    console.log(`PORT: ${app.get("PORT")}`);
});