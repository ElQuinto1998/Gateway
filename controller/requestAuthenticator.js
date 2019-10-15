'use strict';

const service = require('../helpers');

module.exports = {

    isAuth: (req, res, next) => {
        if (!req.headers.authorization) {
            return res.sendStatus(401);
        }
        const token = req.headers.authorization.split(" ")[1];
        //console.log(token);

        service.decodeToken(token)
            .then(response => {
                req.user = response;
                next();
            }).catch(response => {
            res.sendStatus(response.status);
        })
    }

};
