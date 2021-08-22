module.exports.list_objects = () => {
    return {
        body: {
            type: 'object',
            properties: {
                bucket: {
                    type: 'string'
                },
                name: {
                    type: 'string'
                },
            },
            required: ['bucket','name']
        }
    }
}