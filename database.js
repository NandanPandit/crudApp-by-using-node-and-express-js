const {pgPool, Pool} = require('pg');

const poolConfig ={
    user:'postgres',
    password:'1234',
    database:'crud_app',
    host:'localhost',
    port:5432, //This is default port number
    max:4,    
    min:1
}

const pool = new Pool(poolConfig);
module.exports.pgPool = pool;