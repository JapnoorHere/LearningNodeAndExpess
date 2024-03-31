const {DataTypes} = require('sequelize');
const sequelize = require('../sequelize')

const Todo = sequelize.define('Todo',{
    id:{
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    title:{
        type : DataTypes.STRING,
        allowNull : false
    },
    completed:{
        type : DataTypes.BOOLEAN,
        allowNull : false,
        defaultValue : false
    }
},{
    tableName : 'todos',
    timestamps : false
});

module.exports = Todo;