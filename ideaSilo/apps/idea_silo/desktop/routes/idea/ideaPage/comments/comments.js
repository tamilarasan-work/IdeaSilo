const forms = require('../../../../forms');

module.exports = () => ({
    Stack: {
        props: {
            direction: 'row',
            layout: [
                {
                    Avatar: {
                        props: {
                            initials: true,
                            alt: '$data.user.name.first',
                        },
                    },
                },
                {
                    Stack: {
                        props: {
                            styles: {
                                width: '100%',
                            },
                            layout: [
                                {
                                    Stack: {
                                        props: {
                                            direction: 'row',
                                            justify: 'space-between',
                                            layout: [
                                                {
                                                    Text: {
                                                        props: {
                                                            children: '$data.user.name.first',
                                                        },
                                                    },
                                                },
                                                {
                                                    FormButton: {
                                                        props: {
                                                            children: 'Add',
                                                            formName: 'addComment',
                                                            onClick: [
                                                                {
                                                                    action: 'form',
                                                                    arguments: {
                                                                        type: 'submit',
                                                                        name: 'addComment',
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                    },
                                                },
                                            ],
                                        },
                                    },
                                },
                                forms.ideaComments.add('addComment'),
                            ],
                        },
                    },
                },
            ],
        },
    },
});
