const express = require('express');
const app = express();
const path = require('path');

app.listen(3000, () => {
    console.log("Server is listening");
});


app.get('/', (req, res) => {
    res.send("Hello world")
})

app.get('/json', (req, res) => {
    res.json([{ "Name": "Japnoor" }]);
})