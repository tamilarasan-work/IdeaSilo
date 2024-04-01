const APIS = require('./apis');
const { Schema } = require('./schema');

const Model = {
    name: 'IdeaSilo',
    type: 'Database',
    services: {
        mongodb: {
            create_schema: false,
            alter_schema: false,
        },
    },
    parent: 'com.hub365.ideasilo',
    schema: Schema,
    apis: APIS,
};

module.exports = Model;
