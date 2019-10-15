const express = require('express');
const router = express.Router();
let apiAdapter = require('./apiAdapter');
let isAuthorized = require('../controller/requestAuthenticator');

const BASE_URL = 'http://localhost:7000/api_tienda';
const api = apiAdapter(BASE_URL);

router.get('/pedidos', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    })
});

module.exports = router;
