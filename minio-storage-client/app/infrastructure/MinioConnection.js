const Minio = require('minio')
const fp = require('fastify-plugin')

MinioConnection= async (fastify)=>{
    var minioClient = new Minio.Client({
        endPoint: process.env.MINIO_HOST,
        port: parseInt(process.env.MINIO_PORT),
        useSSL: JSON.parse(process.env.MINIO_SSL),
        accessKey: process.env.MINIO_ACCESS_KEY,
        secretKey: process.env.MINIO_SECRET_KEY
    });

    fastify.decorate('minio', minioClient)
    fastify.decorateRequest('minio', minioClient)
}

module.exports = fp(MinioConnection)