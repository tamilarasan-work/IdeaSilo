const forms = require('../../../../forms');

module.exports = (path, index) => ({
    SpeedDial: {
        props: {
            list: [
                {
                    label: 'Edit',
                    icon: 'pen',
                    preventDefault: true,
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
                                    forms.ideas.edit('editIdea', `root.${ path }`, `root.${ index }`),
                                ],

                            },
                        },
                    },
                },
                {
                    label: 'Delete',
                    icon: 'trash',
                    confirmation: 'Delete',
                    preventDefault: true,
                    onClick: forms.ideas.remove('Delete', path, index),

                },

            ],
        },
    },
});
