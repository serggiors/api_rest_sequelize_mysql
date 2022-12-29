const sequelize = require("sequelize");
const db = new sequelize('registros', 'root', '', {
	host: 'localhost',
	dialect: 'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });
  module.exports = db;