const express = require('express');
const router = express.Router();
let apiAdapter = require('./apiAdapter');
let isAuthorized = require('../controller/requestAuthenticator');

const BASE_URL = 'https://msinventario.herokuapp.com/api_inventario';
const api = apiAdapter(BASE_URL);

router.post('/medicamentos', (req, res) => {
    api.post(req.path, req.body).then(resp => {
        res.send(resp.data)
    })
});

router.get('/medicamentos', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    })
});

router.get('/medicamentos/:code', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    })
});

router.put('/medicamentos', isAuthorized.isAuth, (req, res) => {
    api.put(req.path, req.body).then(resp => {
        res.send(resp.data)
    })
});

router.delete('/medicamentos/:code', isAuthorized.isAuth, (req, res) => {
    api.delete(req.path).then(resp => {
        res.send(resp.data)
    })
});

router.post('/proveedores', isAuthorized.isAuth, (req, res) => {
    api.post(req.path, req.body).then(resp => {
        res.send(resp.data)
    })
});

router.get('/proveedores', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    })
});

router.get('/proveedores/:idProveedor', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    })
});

router.put('/proveedores', isAuthorized.isAuth, (req, res) => {
    api.put(req.path, req.body).then(resp => {
        res.send(resp.data)
    })
});
router.delete('/proveedores/:idProveedor', isAuthorized.isAuth, (req, res) => {
    api.delete(req.path).then(resp => {
        res.send(resp.data)
    })
});

router.get('/puntosDistribucion', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    })
});

router.get('/categorias', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    })
});

router.get('/contadores', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    })
});


module.exports = router;
