const StorageController = require('../../controllers/StorageController')
const StorageSchemea = require('../../schemas/StorageSchema')

module.exports = (fastify, opts, next) => {
    
    fastify.route({
        url: "/url/policy",
        method: "POST",
        handler: StorageController.list_objects,
        schema: StorageSchemea.list_objects()
    })
   
    next()

}