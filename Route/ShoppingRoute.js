const route = require('express').Router();
const { getData, postData, putData, deletData } = require('../Controller/ShoppingController');

route.get('/',getData);
route.post('/',postData);
route.put('/:id',putData);
route.delete('/:id',deletData);

module.exports = route;
