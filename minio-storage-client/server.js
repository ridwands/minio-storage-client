require('dotenv').config();


const fastify_graceful_shutdown = require('fastify-graceful-shutdown')
const MinioConnection = require('./app/infrastructure/MinioConnection')
const fastify = require('fastify')({
    logger: true
})

/*Fastify Register Plugins*/
fastify.register(require('fastify-cors'), {})
    .register(require('./app/routes'))
    .register(fastify_graceful_shutdown)
    .register(MinioConnection)

/*Fastify Error Handling*/
require('./app/helpers/Exception').Exception(fastify)
require('./app/helpers/Exception').SetNotFound(fastify)

/*Run Fastify Server*/
fastify.listen(process.env.PORT, process.env.ADDRESS, (err, address) => {
    if (err) {
        fastify.log.error(err)
        fastify.close()
        process.abort()
    }
    fastify.log.info(`server listening on ${address}`)
})