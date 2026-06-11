const express = require('express');
const cors = require('cors');
const path = require('path');
const products = require('./data/product');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'test-client')));
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'test-client', 'index.html'));
});

app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        service: 'marchelocal-api',
        timestamp: new Date().toISOString()
    });
});
app.get('/products', (req, res) => {
    res.status(200).json(products);
});
app.get('/products/:id', (req, res) => {
    if (req.params.id == 1 || req.params.id == 2 || req.params.id == 3) {
        res.json({
            status: 200,
            service: "marchelocal-api",
            timestamp: new Date().toISOString(),
            id: req.params.id
        });
    } else {
        res.status(404).json({
            status: 404,
            service: "marchelocal-api",
            timestamp: new Date().toISOString(),
            message: "Produit non trouvé"
        });
    }
});
app.post('/products', (req, res) => {
    const newProduct = createProduct(id,name,price,category);
    res.status(201).location(`/products/${newProduct.id}`).json(newProduct);
});

app.put('/products/:id', (req, res) => {
    if (req.params.id == 1 || req.params.id == 2 || req.params.id == 3) {
        const { name, price, category } = req.body;
        updateProduct(req.params.id, { name, price, category });
        res.status(200).json(getProduct(req.params.id));
    } else {
        res.status(404).json({
            status: 404,
            service: "marchelocal-api",
            timestamp: new Date().toISOString(),
            message: "Produit non trouvé"
        });
    }
});
app.patch('/products/:id',(req, res) => {
    const id = req.params.id;
    const updates = req.body;
    patchProduct(id, updates);
    res.status(200).json(getProduct(id));
});
app.delete('/products/:id', (req, res) => {
    if (req.params.id == 1 || req.params.id == 2 || req.params.id == 3) {
        deleteProduct(req.params.id);
        res.status(204).send();
    } else {
        res.status(404).json({
            status: 404,
            service: "marchelocal-api",
            timestamp: new Date().toISOString(),
            message: "Produit non trouvé"
        });
    }
});

app.use((req, res) => {
    if (req.method === 'GET') {
        res.sendFile(path.join(__dirname, 'test-client', 'index.html'));
    } else {
        res.status(404).json({ error: 'Not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Serveur demarre sur http://localhost:${PORT}`);
})