const express = require('express');
const sequelize = require('./sequelize');
const Todo = require('./model/todo');
const app = express();

const PORT = 3000;

sequelize.authenticate().then(() => {
    console.log("Connection has been established successfully.");
    return sequelize.sync({alter : true});
}).then(() => {
    console.log("All models synced successfully.");
})
.catch(err => {
    console.log(err);
});

app.use(express.json());

app.get('/todos', async (req, res) => {
    Todo.findAll().then(todos=>{
        res.json(todos);
    }).catch(err=>{
        console.log(err);
    })
});

app.post('/todos', async (req, res) => {
    const {title, completed} = req.body;
    Todo.create({title, completed}).then(todo=>{
        res.json(todo);
    }).catch(err=>{
        console.log(err);
    })
});

app.listen(PORT, () => {
    console.log('Server is listening');
});