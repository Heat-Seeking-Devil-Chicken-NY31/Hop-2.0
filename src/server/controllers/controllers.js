// const db = require('../database/db.js');
// This pool needs to be moved to a separate file when issues are resolved
const { Pool } = require('pg');

const PG_URI = 'postgres://bpjberhu:bvRHB-StO79otlzUxLoIe0B-xW-NDQ-J@jelani.db.elephantsql.com/bpjberhu';
const pool = new Pool({
  connectionString: PG_URI
});
/////////////////////////////////////////////////////////////////////////////////


const myController = {};

myController.getCharacters = (req, res, next) => {
  const sqlQuery = 'SELECT * from PLAYERS';
  // console.log(pool.query)
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

module.exports = myController