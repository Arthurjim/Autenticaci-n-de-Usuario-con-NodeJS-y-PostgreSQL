require('dotenv').config();

const { Pool, Connection } = require('pg');

const isProduction = process.env.NODE_ENV === 'production'

const connectonString = `postgressql://postgres:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

const pool = new Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectonString
})

module.exports = { pool }