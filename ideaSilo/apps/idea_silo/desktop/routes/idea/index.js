const { title, description } = require('./ideaPage');

module.exports = {
    Page: {
        props: {
            header: {
                type: 'primary',
                back: {
                    name: 'Back',
                    path: '/`$data.router.params.app`',
                },
            },
            layout: [
                {
                    ContainerFluid: {
                        data: {
                            ideaDetails: {
                                from: 'API',
                                request: {
                                    url: 'https://api.hub365.work/graph',
                                    method: 'POST',
                                    withCredentials: true,
                                    data: {
                                        model: '65fbf5c2f7b0893c2aee9031',
                                        type: 'query',
                                        query: 'ReadOne',
                                        arguments: {
                                            _id: '$data.router.params.idea',
                                        },
                                        resolve: {
                                            _id: true,
                                            title: true,
                                            description: true,
                                        },
                                    },
                                },
                            },
                        },
                        props: {
                            drillDown: {
                                idea: '$data.ideaDetails.value',
                            },
                            layout: [
                                // {
                                //     Card: {
                                //         props: {

                                //             layout: [
                                //                 {
                                //                     Stack: {
                                //                         props: {
                                //                             layout: [
                                //                                 {
                                //                                     Text: {
                                //                                         props: {
                                //                                             children: '$data.root.root.root.idea.title',
                                //                                         },
                                //                                     },
                                //                                 },
                                //                                 {
                                //                                     Text: {
                                //                                         props: {
                                //                                             children: '$data.root.root.root.idea.description',
                                //                                         },
                                //                                     },
                                //                                 },
                                //                             ],
                                //                         },
                                //                     },
                                //                 },
                                //             ],
                                //         },
                                //     },
                                // },
                                {
                                    Stack: {
                                        props: {
                                            layout: [
                                                title('root.root.idea'),
                                                description('root.root.idea'),
                                            ],
                                        },
                                    },
                                },
                            ],
                        },
                    },
                },
            ],
        },
    },
};
