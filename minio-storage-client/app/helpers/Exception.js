const Logger = require('node-json-logger');
const logger = new Logger();

module.exports.Exception = (fastify) => {
    fastify.setErrorHandler((error, req, res)=> {
        if (error.validation) {
            result = {code: 422, message: error.message, data: []}
            res.status(200).send(result)
        } else {
            result = {code: 500, message: error.message, data: []}
            res.status(200).send(result)
        }
        logger.error(result)
    })
}

module.exports.SetNotFound = (fastify)=>{
    fastify.setNotFoundHandler((req,res)=>{
        response={
            "code" : 404,
            "message" : "Not Found",
            "data" : []
        }
        return res.status(404).send(response)
    })
}