'use strict';

const express = require('express');
const handleInputData = require('./api/add-data.js');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
  res.send('Hello World');
});


//get data
app.post('/data', (req, res) => {
    handleInputData(req, res);    
});












app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});

