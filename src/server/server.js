const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const controller = require('./controllers/controllers.js')

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', controller.getAll, (req, res) => {
  res.status(200).send(res.locals)
})

// Registering a new user
app.post('/register', controller.registerUser, (req, res) => {
  res.status(200).send('testing register')
  // res.redirect('/')
});

// Authenticating/checking for a user
app.post('/login', controller.authLogin, (req, res) => {
  res.status(200).send('testing login')
});

// Retrieving all associated gigs
app.get('/gigs', controller.getAllGigs, (req, res) => {
  res.status(200).send(res.locals);
})

// Retrieve all gigs by city
app.get('/gigsByCity', controller.getGigsByCity, (req, res) => {
  res.status(200).send(res.locals);
})

// Client makes a new gig 
app.post('/createGig', controller.createGig, (req, res) => {
  res.status(200).send(res.locals);
})

// User picking up a gig
app.post('/addGig', controller.addGig, (req, res) => {
  res.status(200).send('add gig is working properly');
})

// User removing a gig
app.delete('/removeGig', controller.removeGig, (req, res) => {
  res.status(200).send('remove gig is working properly');
})

// Displays all the user's gigs
app.get('/userGigs', controller.getUserGigs, (req, res) => {
  res.status(200).json(res.locals)
})

// Need to add global error handler
app.listen(3000, () => console.log('Server running on port 3000'));