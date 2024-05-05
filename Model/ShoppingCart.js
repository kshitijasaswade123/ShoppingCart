const mongoose = require('mongoose');
const ShoppingCartSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    cover:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('shoppingCart',ShoppingCartSchema);