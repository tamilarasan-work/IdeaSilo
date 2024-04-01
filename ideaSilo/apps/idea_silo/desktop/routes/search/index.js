const table = require('./views/table');
const data = require('./data');
const header = require('./header');

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
                    Search: {
                        key: 'idea-search',
                        props: {
                            name: 'idea-search',
                            data,
                            header,
                            default: {
                                view: 'table',
                            },
                            views: [
                                {
                                    name: 'table',
                                    icon: 'list-hub',
                                    iconProps: {
                                        type: 'custom',
                                    },
                                },
                            ],
                            show: {
                                filters: false,
                            },
                            layout: {
                                table,
                            },
                        },
                    },
                },
            ],
        },
    },
};
