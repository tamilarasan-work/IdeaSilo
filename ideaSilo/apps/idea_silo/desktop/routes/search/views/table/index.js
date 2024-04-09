const columns = require('./columns');

module.exports = [
    {
        RTable: {
            props: {
                name: 'idea-table',
                styles: {
                    marginTop: '10px',

                },
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
