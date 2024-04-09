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
        minWidth: 300,
        maxWidth: 500,
        width: 300,
        accessor: '$data.title',
        Header: header,
    },
    {
        name: 'Description',
        Header: header,
        Cell: {

            layout: [
                {
                    Paragraph: {
                        props: {
                            styles: {

                                overflow: 'hidden',
                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis',
                                height: '24px',
                            },
                            contentType: 'html',
                            children: '$data.root.original.description',
                        },
                    },
                },
            ],
        },
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
