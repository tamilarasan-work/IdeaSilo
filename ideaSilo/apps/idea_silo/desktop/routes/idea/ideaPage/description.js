module.exports = (path) => ({
    Paper: {
        props: {
            drillDown: {
                idea: `$data.${ path }`,
            },
            layout: [
                {
                    Paragraph: {
                        props: {
                            contentType: 'html',
                            children: '$data.root.idea.description',
                        },
                    },
                },
                {
                    Paragraph: {
                        props: {
                            styles: {
                                paddingTop: '17px',
                                fontSize: '13px',
                            },
                            children: 'Created by : `$data.root.idea.creator`',
                        },
                    },
                },
            ],
        },
    },
});
