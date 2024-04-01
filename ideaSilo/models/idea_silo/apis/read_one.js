const ReadOne = {
    type: 'query',
    name: 'ReadOne',
    spec: {
        use: 'v2',
        arguments: {
            type: 'object',
            required: ['_id'],
            additionalProperties: false,
            properties: {
                _id: {
                    type: 'string',
                    format: 'objectId',
                    parse: 'objectId',
                },
            },
        },
        flows: [
            {
                use: 'service',
                name: 'readOne',
                service: 'mongodb',
                method: 'ReadOne',
                spec: {
                    query: {
                        isDeleted: false,
                        _id: '$data.arguments._id',
                    },
                },
            },
        ],
        result: {
            value: '$data.readOne',
        },
        document: '$data',
    },
};

module.exports = ReadOne;
