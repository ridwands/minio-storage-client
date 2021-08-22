const StorageService = require('../services/StorageService')

module.exports.list_objects = async (req,res)=>{
    if (req.body.type!="PUT" && req.body.type!="GET"){
        return res.status(422).send({
            code: 422,
            message: "Type Must Be PUT or GET"
        })
    }
    const list_objects=StorageService.list_objects(req)
    return list_objects

}