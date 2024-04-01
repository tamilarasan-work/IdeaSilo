module.exports = (formName) => ([
    {
        TextInput: {
            props: {
                formName,
                name: 'title',
                label: 'Title',
                required: true,
                placeholder: 'Idea title',
            },
        },
    },
    {
        TextArea: {
            props: {
                formName,
                name: 'description',
                label: 'Description',
                required: true,
                placeholder: 'Idea description',
            },
        },
    },
]);
