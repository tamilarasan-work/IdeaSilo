module.exports = (path) => ({
    Stack: {
        props: {
            direction: 'row',
            justify: 'space-between',
            drillDown: {
                idea: `$data.${ path }`,
            },
            layout: [
                {
                    H2: {
                        props: {
                            children: '$data.root.idea.title',
                        },
                    },
                },
                {
                    TextButton: {
                        props: {
                            icon: 'edit',
                            children: 'Edit',
                            disabled: true,
                        },
                    },
                },
            ],
        },
    },
});
