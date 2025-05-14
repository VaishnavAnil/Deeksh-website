const { Pool } = require("pg");
require("dotenv").config();  

const pool = new Pool({
  user: process.env.DB_USER || "deeksh_jewelry",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "deeksh_jewelry",
  password: process.env.DB_PASSWORD || "Gokul@123",
  port: process.env.DB_PORT || 5432,
});

// Test the database connection
pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Database connection error:", err.stack);
  } else {
    console.log("Database connected successfully at:", res.rows[0].now);
  }
});
module.exports = {
  query: (text, params) => pool.query(text, params),
  pool,
};
