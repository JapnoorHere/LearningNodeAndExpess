const express = require('express');
const app = express();
const data = require('./jsondata');
const path = require('path');

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));   
})

app.get('/json-data',(req,res)=>{
    // const newItem = data.map((item)=>{
    //     const{id} = item;
    //     return {id};
    // })
    res.send(newItem);
})

app.listen('3000');