const columns = require('./columns');

module.exports = [
    {
        RTable: {
            props: {
                name: 'idea-table',
                columns,
                onClick: {
                    action: 'navigate',
                    arguments: {
                        url: '$data.original._id',
                    },
                },
            },
        },
    },
];
