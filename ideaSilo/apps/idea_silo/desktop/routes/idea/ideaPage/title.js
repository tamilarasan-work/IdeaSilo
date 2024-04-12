const forms = require('../../../forms');
const modal = require('./modal');

module.exports = (path, index) => ({
    Stack: {
        props: {
            direction: 'row',
            justify: 'space-between',
            drillDown: {
                idea: `$data.${ path }`,
            },
            layout: [
                {
                    Stack: {
                        props: {
                            direction: 'row',

                            layout: [
                                {
                                    H2: {
                                        props: {

                                            children: '$data.root.root.idea.title',
                                        },
                                    },
                                },
                                {
                                    H5: {
                                        props: {
                                            styles: {
                                                color: 'gray',
                                                display: 'flex',
                                                alignItems: 'center',
                                            },
                                            children: '(`$data.root.root.idea.status`)',
                                        },
                                    },
                                },
                            ],
                        },
                    },
                },
                {
                    Stack: {
                        rerender: {
                            name: 'attachButton',
                        },
                        props: {
                            drillDown: {
                                fileId: '$data.root.idea.fileId',
                            },
                            direction: 'row',
                            layout: [
                                {
                                    TextButton: {
                                        props: {
                                            icon: 'edit',
                                            children: 'Edit',
                                            onClick: {
                                                action: 'open',
                                                arguments: {
                                                    element: 'Lightbox',

                                                    props: {
                                                        title: 'Update Idea',
                                                        position: 'right',
                                                        header: {
                                                            options: [
                                                                {
                                                                    type: 'layout',
                                                                    layout: [
                                                                        {
                                                                            TextButton: {
                                                                                props: {

                                                                                    children: 'Cancel',
                                                                                    onClick: {
                                                                                        action: 'close',
                                                                                        arguments: {
                                                                                            element: 'Lightbox',
                                                                                        },
                                                                                    },
                                                                                },
                                                                            },
                                                                        },
                                                                        {
                                                                            FormButton: {
                                                                                props: {
                                                                                    children: 'Update',
                                                                                    formName: 'editIdea',
                                                                                    onClick: {
                                                                                        action: 'form',
                                                                                        arguments: {
                                                                                            type: 'submit',
                                                                                            name: 'editIdea',
                                                                                        },
                                                                                    },
                                                                                },
                                                                            },
                                                                        },
                                                                    ],
                                                                },
                                                            ],
                                                        },
                                                        layout: [
                                                            forms.ideas.edit('editIdea', `root.root.root.${ path }`, `root.root.root.${ index }`),
                                                        ],

                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                                {
                                    TextButton: {
                                        data: {
                                            name: {
                                                from: 'RESOLVE',
                                                value: {
                                                    __RESOLVE: 'STRING',
                                                    __PATH: '$data.root',
                                                    __PIPELINE: [
                                                        {
                                                            condition: [{
                                                                operator: 'notEmpty',
                                                                values: ['$data.fileId'],
                                                                return: 'Replace file',
                                                            },
                                                            'Attach file',
                                                            ],
                                                        },
                                                    ],
                                                },
                                            },
                                        },

                                        props: {
                                            icon: 'paperclip',
                                            children: '$data.name',
                                            onClick: {
                                                action: 'open',
                                                arguments: modal('root.root.idea'),
                                            },

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
});
