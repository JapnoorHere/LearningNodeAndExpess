const {Sequelize, Model} = require('sequelize');

const sequelize = new Sequelize('todos','postgres','root',{
    host : 'localhost',
    port : 5432,
    dialect : 'postgres'
});

module.exports = sequelize;