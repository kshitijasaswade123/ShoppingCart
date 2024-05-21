const ShoppingModel = require('../Model/ShoppingCart');

exports.getData = async(req,res)=>{
    try {
        const data = await ShoppingModel.find();
        return res.json({
            errors:false,
            data:data
        })

    } catch (error) {
        return res.status(400).json({
            errors:true,
            message:error.message

        })
    }
}

exports.postData = async(req,res)=>{
    try {
       const data = await ShoppingModel.create(req.body) ;
       return res.json({
        errors:false,
        data:data
       })
    } catch (error) {
        return res.status(400).json({
            errors:true,
            message:error.message
        })
    }
}

exports.putData = async(req,res)=>{
    try {
        const data = await ShoppingModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.json({
            errors:false,
            data:data
        })
    } catch (error) {
        return res.status(400).json({
            errors:true,
            message:error.message
        })
    }
}

exports.deletData = async(req,res)=>{
    try {
        const data = await ShoppingModel.findByIdAndDelete(req.params.id);
        return res.json({
            errors:false,
            data:data
        })
    } catch (error) {
        return res.status(400).json({
            errors:true,
            message:error.message
        })
    }
}