const props = require('./props');

module.exports = (formName) => ({
    Form: {
        props: {
            name: formName,
            fields: {
                comment: {
                    type: 'String',
                    required: true,
                },
            },
            layout: props.layout(formName),
            submit: props.submit('Create'),
            onSuccess: [
                {
                    action: 'form',
                    arguments: {
                        type: 'reset',
                        name: 'addComment',
                    },
                },
                {
                    action: 'list',
                    arguments: {
                        type: 'add',
                        name: 'commentList',
                        item: '$data.responses.0.value',
                    },
                },
            ],
        },
    },
});
