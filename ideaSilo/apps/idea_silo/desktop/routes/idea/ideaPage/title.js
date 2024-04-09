const forms = require('../../../forms');

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
                                            forms.ideas.edit('editIdea', `root.root.${ path }`, `root.root.${ index }`),
                                        ],

                                    },
                                },
                            },
                        },
                    },
                },
            ],
        },
    },
});
