//DEPENDENCIES
const express = require('express');
const app = express();

const mongoose = require('mongoose');

require('dotenv').config();

// Database Configuration
mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

//MIDLEWARE

app.get('/', (req, res)=>{
  res.render('index.ejs')
})
// Database Connection Error / Success



// Listener
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server is listening on port: ${PORT}`));