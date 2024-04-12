const props = require('./props');

module.exports = (formName) => ({
    Form: {
        props: {
            name: formName,
            styles: {
                '>*': {
                    marginBottom: '20px',
                },
            },

            fields: {
                title: {
                    type: 'String',
                    required: true,
                },
                description: {
                    type: 'String',
                    required: true,
                },
                status: {
                    type: 'String',
                    required: true,
                    default: {
                        label: 'Draft',
                        value: 'Draft',
                    },
                },
            },
            layout: props.layout(formName),
            submit: props.submit('Create'),
            onSuccess: [
                {
                    action: 'list',
                    arguments: {
                        type: 'add',
                        name: 'idea-table',
                        item: '$data.responses.0.value',
                        atBeginning: true,
                    },
                },
                {
                    action: 'list',
                    arguments: {
                        type: 'add',
                        name: 'idea-list',
                        item: '$data.responses.0.value',
                        atBeginning: true,
                    },
                },
                {
                    action: 'searchCount',
                    arguments: {
                        type: 'add',
                        name: 'idea-search',

                    },
                },
                {
                    action: 'close',
                    arguments: {
                        element: 'Lightbox',
                    },
                },
            ],
        },
    },
});
