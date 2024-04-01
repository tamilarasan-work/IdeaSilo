const speedDial = require('./speedDial');

const header = {
    layout: [
        {
            Text: {
                props: {
                    children: '$data.root.column.name',
                },
            },
        },
    ],
};

module.exports = [
    {
        name: 'Title',
        accessor: '$data.title',
        Header: header,
    },
    {
        name: 'Description',
        accessor: '$data.description',
        Header: header,
    },
    {
        name: 'Function',
        Cell: {
            layout: [
                speedDial('root.original', 'root.index'),
            ],
        },
    },
];
