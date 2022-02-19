const { Pool } = require('pg');

const PG_URI = 'postgres://bpjberhu:bvRHB-StO79otlzUxLoIe0B-xW-NDQ-J@jelani.db.elephantsql.com/bpjberhu';


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
