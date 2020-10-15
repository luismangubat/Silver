require('dotenv').config()

let config = {

    client: 'mysql2',
    connection: {
        host:process.env.MYSQL_HOST,
        user:process.env.MYSQL_USER,
        database:process.env.MYSQL_PASS,
        password:process.env.MYSQL_DB,
        multipleStatement: true
    }
}


module.exports = require('knex')(config)