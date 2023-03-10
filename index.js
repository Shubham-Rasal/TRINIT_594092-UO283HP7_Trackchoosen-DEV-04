'use strict';

const express = require('express');
const cors = require('cors')
const handleInputData = require('./api/add-data.js');
const ConfigureSystem = require('./api/configure.js');
const handleInputParams = require('./api/add-parameter.js');
const getAllParameters = require('./api/get-paramenter-list.js');
const clusterBySingleParam = require('./api/cluster-by-single-param.js');
const getAllEntities = require('./models/get-entities.js');
const getAllData = require('./api/get-all-entities.js');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello World');
});


//post data
app.post('/data', (req, res) => {
    handleInputData(req, res);    
});

//get data
app.get('/data', (req, res) => {
    getAllData(req, res);
});


//configure system
app.post('/configure', (req, res) => {
    ConfigureSystem(req, res);
});

//get parameter list
app.get('/parameters', (req, res) => {
    getAllParameters(req, res);
});

//add parameter
app.post('/parameters', (req, res) => {
   handleInputParams(req, res);
});

//cluster by single parameter
app.post('/cluster', (req, res) => {
    clusterBySingleParam(req, res);
});

//fake cluster












app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});


