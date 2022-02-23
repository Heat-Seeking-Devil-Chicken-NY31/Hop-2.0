const { Pool } = require('pg');

// updated URI for new DB
const PG_URI = 'postgres://xjfiotza:bKlnsrHlB6RXdSlkmSWTTRtJOOB40fnZ@jelani.db.elephantsql.com/xjfiotza';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI
});



pool.query('SELECT NOW()', (err, res) =>{
console.log(err,res);
pool.end();
})

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};
