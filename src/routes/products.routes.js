const express =  require('express');
const router = express.Router();
const products = require('../data/products');

let nextId = products.reduce((max, p) => Math.max(max, p.id), 0 + 1);

router.get('/', (req, res) => {
    res.status(200).json(products);
});

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    const product = products.find((p) => p.id === id);
    if(!product) {
        return res.status(404).json({ error: `produit ${id} introuvable`});
    }
    res.status(200).json(products);
});

router.post('/', (req, res) => {
    const { name, price, category } = req.body;
    const product = { id: nextId++, name, price, category };
    products.push(product);
    res.status(201).location(`/products/${product.id}`).json(product);
});

router.put('/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = products.findIndex((p) => p.id === id);
    if(index === -1) {
        return res.status(404).json({ error: `Produit ${id} introuvavle`});
    }

    const { name, price, category } = req.body;
    products[index] = { id, name, price, category};
    res.status(200).json(products[index]);
});

router.patch('/:id', (req, res) => {
    const id = Number(req.params.id);
    const product = products.find((p) => p.id === id);
    if(!product) {
        return res.status(404).json({ error : `Produit ${id} introuvable`});
    }
    const { name, price, category } = req.body;
    if(name != undefined) product.name = name;
    if(price != undefined) product.price = price;
    if(category != undefined) product.category = category;
    res.status(200).json(product);
});

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = products.findIndex((p) => p.id === id);
    if(index === -1){
        return res.status(404).json({ error : `Produit ${id} introuvable`});
    }
    products.splice(index, 1);
    res.status(204).end();
});

module.exports = router;
