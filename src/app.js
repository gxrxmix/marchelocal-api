const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin : 'http://localhost:5173'}));
app.use(express.json());
app.get('/', (req, res) => {
    res.json({message: 'API MarcheLocal - Bienvenue', version:'1.0.0'})
});

const productsRoutes = require('./routes/products.routes');
app.use('/products, productsRoutes');

module.exports = app;