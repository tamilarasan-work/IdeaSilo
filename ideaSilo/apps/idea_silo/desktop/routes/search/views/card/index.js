const card = require('./card');

module.exports = [
    {
        LazyList: {
            props: {
                name: 'idea-list',
                infiniteLoading: true,
                styles: {
                    marginTop: '20px',
                },
                item: {
                    layout: [
                        {
                            Link: {
                                props: {
                                    to: '/`$data.router.params.app`/`$data.root._id`',
                                    layout: [
                                        card('root.root'),
                                    ],
                                },
                            },
                        },
                    ],
                },
            },
        },
    },

];
