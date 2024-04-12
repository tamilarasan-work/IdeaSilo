const { title, description, comments } = require('./ideaPage');

module.exports = {
    Page: {
        props: {
            header: {

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
                                            creator: true,
                                            status: true,
                                            fileId: true,
                                            fileName: true,
                                        },
                                    },
                                },
                            },

                        },
                        rerender: {
                            name: 'ideaPage',
                        },
                        props: {
                            styles: {
                                marginTop: '40px',
                                padding: '0 20px 0 20px',

                            },
                            drillDown: {
                                idea: '$data.ideaDetails.value',
                            },
                            layout: [
                                {
                                    Stack: {
                                        props: {
                                            styles: {
                                                '>*': {
                                                    marginBottom: '10px',
                                                },
                                            },
                                            layout: [
                                                title('root.root.idea', 'root.root.index'),
                                                description('root.root.idea'),
                                                comments,

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
