const idea = require('./routes/idea');
const search = require('./routes/search');

const Desktop = {
    version: '0.0.0',
    definition: {
        Router: {
            props: {
                routes: {
                    '/': [search],
                    '/:idea': [idea],
                },
            },
        },
    },
};

module.exports = Desktop;
