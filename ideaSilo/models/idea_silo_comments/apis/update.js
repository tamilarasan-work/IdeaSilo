const { UpdateSchema } = require('../schema');

const Update = {
    type: 'mutation',
    name: 'Update',
    spec: {
        use: 'v2',
        arguments: UpdateSchema(['_id', 'comment'], ['_id']),
        flows: [
            {
                use: 'service',
                name: 'updateOne',
                service: 'mongodb',
                method: 'UpdateOne',
                spec: {
                    filter: {
                        _id: '$data.arguments._id',
                    },
                    update: {
                        $set: '$data.arguments',
                    },
                    options: {
                        returnDocument: 'after',
                    },
                },
            },
        ],
        result: {
            value: '$data.updateOne',
        },
        document: '$data',
    },
};

module.exports = Update;
