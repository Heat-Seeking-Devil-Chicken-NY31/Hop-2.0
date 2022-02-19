const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const myController = require('./controllers/controllers.js')

const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', myController.getCharacters, (req, res) => {
  res.status(200).send(res.locals)
})

server = app.listen(3000, () => console.log('Server running on port 3000'));