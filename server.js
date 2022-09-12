//DEPENDENCIES
const express = require('express');
const app = express();
const playersController = require('./controllers/players.js');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

require('dotenv').config();

// Database Configuration
mongoose.connect(process.env.DATABASE_URL);

//MIDLEWARE
app.use(express.urlencoded({extended: false }));
// app.use(methodOverride('_method'));
// app.use('/players', playersController);


app.get('/', (req, res)=>{
  res.render('index.ejs')
})

// Database Connection Error / Success
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));


// Listener
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server is listening on port: ${PORT}`));