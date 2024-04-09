const props = require('./props');

module.exports = (formName, path, index) => ({
    Form: {
        props: {
            name: formName,
            fields: {
                title: {
                    type: 'String',
                    required: true,
                },
                description: {
                    type: 'String',
                    required: true,
                },
            },
            layout: props.layout(formName),
            values: {
                title: { value: `$data.${ path }.title` },
                description: { value: `$data.${ path }.description` },
            },
            submit: props.submit('Update', `${ path }._id`),
            onSuccess: [
                {
                    action: 'close',
                    arguments: {
                        element: 'Lightbox',
                    },
                },
                {
                    action: 'list',
                    arguments: {
                        type: 'update',
                        name: 'idea-table',
                        item: '$data.responses.0.value',
                        index: `$data.${ index }`,
                    },
                },
                {
                    action: 'list',
                    arguments: {
                        type: 'update',
                        name: 'idea-list',
                        item: '$data.responses.0.value',
                        index: `$data.${ index }`,
                    },
                },
                {
                    action: 'rerender',
                    arguments: {
                        name: 'ideaPage',
                    },
                },
            ],
        },
    },
});
