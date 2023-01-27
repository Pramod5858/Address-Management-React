const express =require('express');



const userController = require('../Controller/users');
const detailController = require('../Controller/details');


const route = express.Router();


route.post('/registers', userController.getRegisters);
route.post('/logins', userController.getLogin);
route.post('/details', detailController.postDetails);
route.get('/showdetails', detailController.getDetails);
route.delete('/details/:id', detailController.deleteDetails);
route.get('/details/:id', detailController.updateDetails);
route.put('/details/:id', detailController.putDetails);
route.get('/search/:key', detailController.searchDetails);

module.exports=route;