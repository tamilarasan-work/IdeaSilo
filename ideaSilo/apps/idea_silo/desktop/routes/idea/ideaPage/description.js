module.exports = (path) => ({
    Paper: {
        props: {
            drillDown: {
                idea: `$data.${ path }`,
            },
            layout: [
                {
                    Text: {
                        props: {
                            children: '$data.root.idea.description',
                        },
                    },
                },
            ],
        },
    },
});
