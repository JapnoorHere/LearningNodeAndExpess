const express = require('express');
const app = express();
const productRoutes = require('./routes/productsRoutes');

app.use(express.json());

app.use("/",productRoutes);

app.listen('4000');