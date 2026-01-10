const pool = require("./pgconnect");
const { Pool } = require("pg");

async function init() {
  // First, ensure database exists
  const adminPool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "Sayoun@123",
    port: 5432,
  });

  try {
    const res = await adminPool.query(
      `SELECT 1 FROM pg_database WHERE datname = 'employeedb'`
    );
    if (res.rowCount === 0) {
      await adminPool.query(`CREATE DATABASE employeedb`);
      console.log("Database 'employeedb' created");
    }
  } catch (err) {
    console.error("Error checking/creating database:", err.message);
  } finally {
    await adminPool.end();
  }

  // Now create table
  try {
    await pool.query(`CREATE TABLE IF NOT EXISTS employees (
          id SERIAL PRIMARY KEY,
          name VARCHAR(100) NOT NULL,
          email VARCHAR(100) UNIQUE NOT NULL
      )`);
    console.log("Employees table ready");
  } catch (err) {
    console.error("Error creating table:", err.message);
    throw err;
  }
}

async function createUser(name, email) {
  try {
    const result = await pool.query(
      `INSERT INTO employees (name, email) VALUES ($1, $2) RETURNING *`,
      [name, email]
    );
    console.log("✅ User created:", result.rows[0]);
    return result.rows[0];
  } catch (err) {
    console.error("Error creating user:", err.message);
    throw err;
  }
}

async function getUser(id) {
  try {
    const result = await pool.query(`SELECT * FROM employees WHERE id = $1`, [
      id,
    ]);
    if (result.rows.length === 0) {
      console.log("⚠️ User not found with ID:", id);
      return null;
    }
    console.log("✅ User retrieved:", result.rows[0]);
    return result.rows[0];
  } catch (err) {
    console.error("❌ Error getting user:", err.message);
    throw err;
  }
}

async function getAllUsers() {
  try {
    const result = await pool.query(`SELECT * FROM employees ORDER BY id`);
    console.log(`✅ Retrieved ${result.rows.length} users`);
    return result.rows;
  } catch (err) {
    console.error("❌ Error getting all users:", err.message);
    throw err;
  }
}

async function updateUser(id, name, email) {
  try {
    const result = await pool.query(
      `UPDATE employees SET name = $1, email = $2 WHERE id = $3 RETURNING *`,
      [name, email, id]
    );
    if (result.rows.length === 0) {
      console.log("⚠️ User not found with ID:", id);
      return null;
    }
    console.log("✅ User updated:", result.rows[0]);
    return result.rows[0];
  } catch (err) {
    console.error("❌ Error updating user:", err.message);
    throw err;
  }
}

async function deleteUser(id) {
  try {
    const result = await pool.query(
      `DELETE FROM employees WHERE id = $1 RETURNING *`,
      [id]
    );
    if (result.rows.length === 0) {
      console.log("⚠️ User not found with ID:", id);
      return null;
    }
    console.log("✅ User deleted:", result.rows[0]);
    return result.rows[0];
  } catch (err) {
    console.error("❌ Error deleting user:", err.message);
    throw err;
  }
}

module.exports = {
  init,
  createUser,
  getUser,
  getAllUsers,
  updateUser,
  deleteUser,
};
