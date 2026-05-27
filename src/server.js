const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({
    origin: [
        'https://app.marchelocal.cg',
        'https://admin.marhelocal.cg',
        'http://localhost:5173'
    ]
}))
const PORT = process.env.PORT || 3000;
app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        service: 'marchelocal-api',
        timestamp: new Date().toISOString()
    });
});

app.listen(PORT, () => {
    console.log(`Serveur demarre sur http://localhost:{PORT}`);
})