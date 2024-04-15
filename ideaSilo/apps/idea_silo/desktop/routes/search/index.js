const table = require('./views/table');
const card = require('./views/card');
const data = require('./data');
const header = require('./header');
const filters = require('./filters');

module.exports = {
    Page: {
        props: {
            header: {
                back: {
                    name: 'Launchpad',
                    path: '/',
                },
                hide: {
                    header: false,
                    back: false,
                    user: false,
                    notifications: false,
                    logo: false,
                },
            },
            layout: [
                {
                    ContainerFluid: {
                        props: {
                            layout: [{
                                Search: {
                                    key: 'idea-search',
                                    props: {
                                        styles: {
                                            padding: '0 20px',
                                        },

                                        name: 'idea-search',
                                        data,
                                        header,

                                        default: {
                                            view: 'card',
                                            sortBy: ['createdAt:desc'],

                                        },
                                        sortBy: [
                                            {
                                                label: 'title(A-Z)',
                                                value: 'title:asc',
                                            },
                                            {
                                                label: 'title(Z-A)',
                                                value: 'title:desc',
                                            },
                                            {
                                                label: 'Created Asc',
                                                value: 'createdAt:asc',
                                            },
                                            {
                                                label: 'Created Desc',
                                                value: 'createdAt:desc',
                                            },
                                            {
                                                label: 'Updated Desc',
                                                value: 'updatedAt:desc',
                                            },
                                            {
                                                label: 'Updated Asc',
                                                value: 'updatedAt:asc',
                                            },
                                        ],
                                        views: [
                                            {
                                                name: 'card',
                                                icon: 'id-card',
                                            },
                                            {
                                                name: 'table',
                                                icon: 'table',

                                            },

                                        ],
                                        filters,
                                        // [
                                        //     {
                                        //         type: 'Multiple',
                                        //         name: 'status',
                                        //         label: 'Status',
                                        //         search: false,
                                        //         defaultOpen: true,
                                        //         data: {
                                        //             from: 'STATIC',
                                        //             value: [
                                        //                 {
                                        //                     label: 'Draft',
                                        //                     value: 'Draft',
                                        //                 },
                                        //                 {
                                        //                     label: 'In Progress',
                                        //                     value: 'In progress',
                                        //                 },
                                        //                 {
                                        //                     label: 'Completed',
                                        //                     value: 'Completed',

                                        //                 },
                                        //             ],
                                        //         },
                                        //     },
                                        //     {
                                        //         type: 'Multiple',
                                        //         name: 'creator',
                                        //         label: 'Creator',
                                        //         search: true,
                                        //         availableFilter: 'creator',
                                        //         data: {
                                        //             from: 'AGGS',
                                        //         },
                                        //     },

                                        // ],

                                        layout: {
                                            table,
                                            card,
                                        },
                                        show: {
                                            filter: true,
                                        },
                                        order: [
                                            [['filters', 'search'], ['count', 'sortBy', 'views', 'right']],
                                            [],

                                        ],

                                        filterType: 'overlay',
                                    },
                                },
                            }],
                        },
                    },
                },

            ],
        },
    },
};
