const path = require('path')

const express = require('express')
const dotenv = require("dotenv").config(); // read environment file .env

//routers
const authRouter = require('./routes/AuthRoutes');
const QuoteFormRouter = require('./routes/QuoteFormRoutes');
const QuoteHistoryRouter =require('./routes/QuoteHistoryRoutes');


const app = express(); 


app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
