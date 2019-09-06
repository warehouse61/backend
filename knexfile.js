// Update with your config settings.
// Update with your config settings.
require("dotenv").config();

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: process.env.DB_LOCAL,
      user: process.env.DB_LOCAL_USER,
      password: process.env.DB_LOCAL_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./data/migrations",
      tableName: "warehouse61"
    },
    seeds: {
      directory: "./data/seeds"
    },
    useNullAsDefault: true
  },

  testing: {
    client: "postgresql",
    connection: {
      database: process.env.DB_LOCAL,
      user: process.env.DB_LOCAL_USER,
      password: process.env.DB_LOCAL_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./data/migrations",
      tableName: "warehouse61"
    },
    seeds: {
      directory: "./data/seeds"
    },
    useNullAsDefault: true
  },

  production: {
    client: "postgresql",
    connection: process.env.DATABASE_URL || {
      database: process.env.DB,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD
    },
    migrations: {
      directory: "./data/migrations",
      tableName: "warehouse61"
    },
    seeds: {
      directory: "./data/seeds"
    },
    useNullAsDefault: true
  }
};