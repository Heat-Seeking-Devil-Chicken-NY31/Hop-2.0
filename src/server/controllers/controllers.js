// const db = require('../database/db.js');
// This pool needs to be moved to a separate file when issues are resolved
const { Pool } = require('pg');

const PG_URI = 'postgres://bpjberhu:bvRHB-StO79otlzUxLoIe0B-xW-NDQ-J@jelani.db.elephantsql.com/bpjberhu';
const pool = new Pool({
  connectionString: PG_URI
});
/////////////////////////////////////////////////////////////////////////////////


const controller = {};

controller.getAll = (req, res, next) => {
  const sqlQuery = 'SELECT * from users';
  
  pool.query(sqlQuery)
    .then(payload => {
      res.locals = payload.rows;
      console.log('res.locals is now:', res.locals)
      next();
    }).catch(err=>{
      return next({
        log:'Error!',
        message:'Cant get players'
      });
    });
};

// Retrieves state data from front end and adds username/password to the database
controller.registerUser = (req, res, next) => {
  const { username, password } = req.body
  const sqlQuery = `INSERT INTO users (username, password) VALUES ('${username}', '${password}')`;
  pool.query(sqlQuery)
    .then(payload => {
      console.log ('The following user/password were added ' + payload )
      return next();
    })
    .catch (err => {
      return next({
        log:'Error!',
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
      // throw error
      console.log(error)
    }

    if (result.rows.length > 0) {
      // checking to see if result.rows.length is an empty array
      // if the entry does not exist in the table, result.rows.length is an empty array
      console.log(result.rows);
    } else {
      console.log("invalid combination")
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
    console.log ('The following gigs were retrieved' + payload);
    res.locals = payload.rows;
    return next();
  })
  .catch (err => {
    return next({
      log:'Error!',
      message:'Retrieving gigs failed'
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
    console.log ('The following gigs were retrieved' + payload);
    res.locals = payload.rows;
    return next();
  })
  .catch (err => {
    return next({
      log:'Error!',
      message:'Retrieving gigs failed'
    });
  });
};

// Create a new gig
controller.createGig = (req, res, next) => {
// we have t odestructure the req.body and make sure our labels match the keys on the req.body
const { _id, title, city, hourly_rate, description, schedule, startDate, user_id_created_by, user_id__assigned_to } = req.body;
const sqlQuery = `INSERT INTO Gigs Values ('${_id}', '${title}', '${city}', '${hourly_rate}', '${description}','${schedule}', '${startDate}', '${user_id_created_by}' , '${user_id__assigned_to}' )`
// Will need logic to read the user_id_created_by 
// wee have to define our sql query, in this case we are inserting something into the dataabse, 
pool.query(sqlQuery)
.then(payload=>{
  console.log(req.body);
  // console.log('The following gigs were inserted'+req.body)
  res.locals = req.body
  return next();
})
.catch(err =>{
  return next({
    log:'Error!',
    message: 'Gig insertion failed'
  })
})

//querying the pool, aka iusing the sql command to do something to our datbase
// we have t osend back some kind of record to our clinet to notify them that this was done 
};

// Add a gig to user
controller.addGig = (req, res, next) => {
  const { user_id, job_id } = req.body
  // assign user's ID to "user_id_assigned_to" in the gigs table
  // create new entry in USER_JOB_ASSIGNED_TO_JOIN 
    // take the gig's ID
    // take the user's ID
  const sqlQuery = `INSERT INTO user_job_assigned_to_join (user_id, job_id) VALUES ('${user_id}', '${job_id}')`;
  pool.query(sqlQuery)
  .then(payload=>{
    res.locals = req.body
    return next();
  })
  .catch(err =>{
    return next({
      log:'Error!',
      message: 'Gig insertion failed'
    })
  })  
  /*SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;
*/  
};

// remove a gig from user
controller.removeGig = (req, res, next) => {
  
  const { user_id, job_id } = req.body
  const sqlQuery = `DELETE FROM user_job_assigned_to_join WHERE user_id='${user_id}' AND job_id='${job_id}'`;

  pool.query(sqlQuery)
  .then(payload=>{
    console.log(payload);
    console.log(payload.result.rowCount)
    // console.log('The following gigs were inserted'+req.body)
    res.locals = req.body
    return next();
  })
  .catch(err =>{
    return next({
      log:'Error!',
      message: 'Gig deletion failed'
    })
  })  
};

// Display all user's added gigs
controller.getUserGigs = (req, res, next) => {
  const { user_id } = req.body
  const sqlQuery = `SELECT Gigs.* FROM user_job_assigned_to_join INNER JOIN Gigs ON user_job_assigned_to_join.job_id = Gigs._id WHERE user_job_assigned_to_join.user_id='${user_id}'`
  
  pool.query(sqlQuery)
  .then(payload=>{
    // console.log(payload)
    res.locals = payload.rows;
    return next();
  })
  .catch(err =>{
    return next({
      log:'Error!',
      message: 'Getting user gigs failed'
    })
  })  
};


module.exports = controller

