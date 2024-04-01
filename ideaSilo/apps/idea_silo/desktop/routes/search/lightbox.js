const forms = require('../../forms');

module.exports = {
    element: 'Lightbox',
    props: {
        title: 'Add Idea',
        position: 'right',
        header: {
            options: [
                {
                    type: 'layout',
                    layout: [
                        {
                            Button: {
                                props: {
                                    color: 'subtle',
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
                                    children: 'Save',
                                    formName: 'addIdea',
                                    onClick: [
                                        {
                                            action: 'form',
                                            arguments: {
                                                type: 'submit',
                                                name: 'addIdea',
                                            },
                                        },
                                    ],
                                },
                            },
                        },
                    ],
                },
            ],
        },
        layout: [forms.ideas.add('addIdea')],
    },
};
