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

// Gets all users stored in the database, not used in front end was just used for testing
app.get('/getUsers', controller.getUsers, (req, res) => {
  res.status(200).send(res.locals)
})

// Registering a new user, not implemented in front end
app.post('/register', controller.registerUser, (req, res) => {
  res.status(200).send('testing register')
});

// Authenticating/checking for a user, not implemented in front end
app.post('/login', controller.authLogin, (req, res) => {
  res.status(200).send('testing login')
});

// Retrieving all associated gigs
app.get('/gigs', controller.getAllGigs, (req, res) => {
  res.status(200).send(res.locals);
})

// Retrieve all gigs by city
app.post('/gigsByCity', controller.getGigsByCity, (req, res) => {
  res.status(200).send(res.locals);
})

// Client makes a new gig 
app.post('/createGig', controller.createGig, (req, res) => {
  res.status(200).json(res.locals);
})

// User picking up a gig
app.post('/addGig', controller.checkGig, controller.addGig, (req, res) => {
  res.status(200).send('add gig is working properly');
})

// User removing a gig
app.delete('/removeGig', controller.removeGig, (req, res) => {
  res.status(200).send('remove gig is working properly');
})

// Displays all the user's gigs
app.post('/userGigs', controller.getUserGigs, (req, res) => {
  res.status(200).json(res.locals);
})




// Need to add global error handler

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


app.listen(8080, () => console.log('Server running on port 8080'));