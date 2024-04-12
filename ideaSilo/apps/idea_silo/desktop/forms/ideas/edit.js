const props = require('./props');

module.exports = (formName, path, index) => ({
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
                    // default: {
                    //     label: `$data.${ path }.select`,
                    //     value: `$data.${ path }.select`,
                    // },
                },
            },
            layout: props.layout(formName, `root.${ path }`),
            values: {
                title: { value: `$data.${ path }.title` },
                description: { value: `$data.${ path }.description` },
                status: {
                    label: `$data.${ path }.status`,
                    value: `$data.${ path }.status`,
                },
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
