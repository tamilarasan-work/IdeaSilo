const props = require('./props');

module.exports = (formName, path, comment) => ({
    Form: {
        reducer: {
            form: 'form',
        },
        props: {
            isInline: true,
            name: `${ formName }_\`$data.${ path }._id\``,
            fields: {
                comment: {
                    type: 'String',
                    required: true,
                },
            },
            layout: props.layout(`${ formName }_\`$data.root.${ path }._id\``),
            values: {
                comment: { value: `$data.${ path }.comment` },
            },
            submit: props.submit('Update', `${ path }._id`),

            readLayout: comment,
            onSuccess: [
                {
                    action: 'list',
                    arguments: {
                        type: 'update',
                        name: 'commentList',
                        item: '$data.responses.0.value',
                        index: `$data.${ path }.index`,
                    },
                },
            ],
        },
    },
});
