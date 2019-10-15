const express = require('express');
const router = express.Router();
let inventarioRouter = require('./inventarioService');
let authRouter = require('../controller/AuthController');

router.use((req, res, next) => {
    console.log("Called: ", req.path);
    next()
});

router.use('/inventario', inventarioRouter);
router.use(authRouter);

module.exports = router;
