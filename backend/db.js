const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mini_doctolib',
    password: '?????????',
    port: 5432,
});

module.exports = pool;
