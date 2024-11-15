const express = require('express')
const router = express.Router()
const { getToken, getFaraones, getFaraon, createFaraon, updateFaraon, deleteFaraon } = require('../controllers/Faraones.controllers');


module.exports = () => {
    router.post('/login');
    router.get('/getallfaraons', getFaraones);
    router.get('/getonefaraon/:id',  getFaraon);
    router.post('/createfaraon/',  createFaraon );
    router.put('/updatefaraon/:id',  updateFaraon);
    router.delete('/deletefaraon/:id',  deleteFaraon );

    return router;
}


