const fs = require('fs')

module.exports = (fastify, opts, next) => {
    fs
        .readdirSync(__dirname)
        .forEach((dir) => {
            if (!~dir.indexOf('.js')) {
                const filepath = __dirname + '/' + dir
                fs
                    .readdirSync(filepath)
                    .forEach((file) => {
                        const basename = file.replace('.js', '')
                        fastify.register(require(filepath + '/' + basename), {prefix: `/${dir}/${basename}`})
                    })
            }
        })
    next()
}