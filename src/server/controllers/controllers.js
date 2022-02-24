// const db = require('../database/db.js');
// This pool needs to be moved to a separate file when issues are resolved
const { Pool } = require('pg');
const dotenv = require('dotenv').config();


const PG_URI = process.env.DB_CONNECTION_STRING;
const pool = new Pool({
  connectionString: PG_URI
});


const controller = {};

controller.getUsers = (req, res, next) => {
  const sqlQuery = 'SELECT * from users';
  console.log(req)
  pool.query(sqlQuery)
    .then(payload => {
      res.locals = payload.rows;
      // console.log('res.locals is now:', res.locals)
      next();
    }).catch(err=>{
      return next({
        log:'Error in getUsers middleware!',
        message:'Cant get players'
      });
    });
};

// Retrieves state data from front end and adds username/password to the database
controller.registerUser = (req, res, next) => {
  const { username } = req.body
  const sqlQuery = `INSERT INTO users (username) VALUES ('${username}')`;
  pool.query(sqlQuery)
    .then(payload => {
      console.log(payload)
      return next();
    })
    .catch (err => {
      return next({
        log:'Error in registerUser middleware!',
        message:'Invalid username or password'
      });
    });
};

// Retrieves state and checks if it exists in the users table
controller.authLogin = (req, res, next) => {
  const { username, password } = req.body;
  const sqlQuery = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;

  pool.query(sqlQuery, (error, result) => {
    if (error) {
      return next({
        log: 'Error in authLogin middleware!',
        message: 'Error in SQL Query for authLogin' + error,
      });
    }

    if (result.rows.length > 0) {
      // checking to see if result.rows.length is an empty array
      // if the entry does not exist in the table, result.rows.length is an empty array
      console.log(result.rows);
    } else {
      return next({
        log: 'Error in authLogin middleware!',
        message: 'Invalid User/Password combination',
      });
    }

    return next()
  })  
};

// Sends the entire gig table in res.locals
  // needs to be specified later on so that it only sends gigs associated with that provider/user
controller.getAllGigs = (req, res, next) => { 
  // const { id, title, city, rate, desc, schedule, startDate, provider, client } = req.body;
  const sqlQuery = `SELECT * FROM gigs`;

  pool.query(sqlQuery)
  .then(payload => {
    console.log ('The following gigs were retrieved' + payload.rows);
    res.locals = payload.rows;
    return next();
  })
  .catch (err => {
    return next({
      log: 'Error in getAllGigs middleware!',
      message: 'Retrieving gigs failed'
    });
  });
};

// Gets the gigs filtered by city
controller.getGigsByCity = (req, res, next) => { 
  const { city } = req.body;
  const sqlQuery = `SELECT * FROM gigs WHERE city='${city}'`;
  // const sqlQuery = `SELECT * FROM gigs WHERE city='Los Angeles'`;

  pool.query(sqlQuery)
  .then(payload => {
    console.log ('The following gigs were retrieved' + payload.rows);
    res.locals = payload.rows;
    return next();
  })
  .catch (err => {
    return next({
      log:'Error in getGigsByCity!',
      message: 'Retrieving gigs failed'
    });
  });
};

// Gets the gigs filtered by attributes defined in body
controller.getGigsByAttribute = (req, res, next) => { 
  const { city, title, hourly_rate_max, hourly_rate_min, description } = req.body;

  // Initial portion of query
  let sqlQuery = `SELECT * FROM gigs`;

  let conditions = '';
  if (city !== undefined) conditions += `city ILIKE '%${city}%'`;
  if (title !== undefined) conditions += conditions === '' ? `title ILIKE '%${title}%'` : ` AND title ILIKE '%${title}%'`;
  if (hourly_rate_min !== undefined) conditions += conditions === '' ? `hourly_rate >= ${hourly_rate_min}` : ` AND hourly_rate >= ${hourly_rate_min}`;
  if (hourly_rate_max !== undefined) conditions += conditions === '' ? `hourly_rate <= ${hourly_rate_max}` : ` AND hourly_rate <= ${hourly_rate_max}`;
  if (description !== undefined) conditions += conditions === '' ? `description ILIKE '%${description}%'` : ` AND description ILIKE '%${description}%'`;
  if (conditions !== '') sqlQuery += ` WHERE ${conditions}`;
  
  console.log(sqlQuery);

  pool.query(sqlQuery)
  .then(payload => {
    console.log ('The following gigs were retrieved' + payload.rows);
    res.locals = payload.rows;
    return next();
  })
  .catch (err => {
    return next({
      log:'Error!', 
      message: 'Retrieving gigs failed'
    });
  });
};

// Create a new gig
controller.createGig = (req, res, next) => {
// we have t odestructure the req.body and make sure our labels match the keys on the req.body
const { title, city, hourly_rate, description, schedule, startDate, username_created_by} = req.body;
const sqlQuery = `INSERT INTO Gigs (title, city, hourly_rate, description, schedule, start_date, username_created_by) VALUES ('${title}', '${city}', '${hourly_rate}', '${description}','${schedule}', '${startDate}', '${username_created_by}')`

console.log(sqlQuery);
// Will need logic to read the user_id_created_by 
// wee have to define our sql query, in this case we are inserting something into the dataabse, 
pool.query(sqlQuery)
.then(payload=>{
  // console.log(req.body);
  // console.log('The following gigs were inserted'+req.body)
  res.locals = req.body
  return next();
})
.catch(err =>{
  return next({
    log: 'Error in createGig middleware!',
    message: 'Gig insertion failed'
  })
})

//querying the pool, aka iusing the sql command to do something to our datbase
// we have t osend back some kind of record to our clinet to notify them that this was done 
};

// Add a gig to user
controller.addGig = (req, res, next) => {
  const { user_username, job_id } = req.body
  // assign user's ID to "user_id_assigned_to" in the gigs table
  // create new entry in USER_JOB_ASSIGNED_TO_JOIN 
    // take the gig's ID
    // take the user's ID

  // Make a query to check if this entry already exists in the table, if not run the follow up query to add it

  const sqlQuery = `INSERT INTO user_job_assigned_to_join (user_username, job_id) VALUES ('${user_username}', '${job_id}')`;

  console.log(sqlQuery)

  pool.query(sqlQuery)
  .then(payload=>{
    res.locals = req.body
    return next();
  })
  .catch(err =>{
    return next({
      log: 'Error in addGig middleware!',
      message: 'User failed to add gig'
    })
  })  
  
};
//SELECT * FROM user_job_assigned_to_join WHERE job_id =1
// Check if gig has already been added to the join table
controller.checkGig = (req, res, next) => {
  const { job_id } = req.body
  const sqlQuery = `SELECT * FROM user_job_assigned_to_join WHERE job_id='${job_id}'`;
  

  pool.query(sqlQuery)
  .then(payload=>{
    if (payload.rows.length === 0) {
      // checking to see if result.rows.length is an empty array
      // if the entry does not exist in the table, result.rows.length is an empty array
      console.log(payload.rows);
      return next();
    } else {
      return next({
        log: 'Error in checkGig middleware!',
        message: 'Gig has already been picked up!',
      });
    }
  })
  .catch(err =>{
    return next({
      log: 'Error in checkGig middleware!',
      message: 'Failed to search entry from database in checkGig'
    })
  })  
  
};

// remove a gig from user
controller.removeGig = (req, res, next) => {
  
  const { user_username, job_id } = req.body
  const sqlQuery = `DELETE FROM user_job_assigned_to_join WHERE user_username='${user_username}' AND job_id='${job_id}';`;

  console.log(sqlQuery);

  pool.query(sqlQuery)
  .then(payload => {
    // console.log('The following gigs were inserted'+req.body)
    res.locals = req.body
    return next();
  })
  .catch(err =>{
    return next({
      log:'Error in removeGig middleware!',
      message: 'User failed to delete gig'
    })
  })  
};

// Display all user's added gigs
controller.getUserGigs = (req, res, next) => {
  const { username } = req.body
  const sqlQuery = `SELECT Gigs.* FROM user_job_assigned_to_join INNER JOIN Gigs ON user_job_assigned_to_join.job_id = Gigs._id WHERE user_job_assigned_to_join.user_username='${username}'`
  
  pool.query(sqlQuery)
  .then(payload=>{
    // console.log(payload)
    res.locals = payload.rows;
    return next();
  })
  .catch(err =>{
    return next({
      log: 'Error in getUserGigs middleware!',
      message: 'Getting user gigs failed'
    })
  })  
};


module.exports = controller

