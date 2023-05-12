import { Sequelize } from "sequelize";
import mysql2 from 'mysql2'

const credentials = {
    database: 'project_master',
    username: 'root',
    password: ''
}

export const sequelize = new Sequelize(credentials.database, credentials.username, credentials.password, {
    host: 'localhost',
    dialect: 'mysql',
    dialectModule: mysql2
});