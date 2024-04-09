module.exports = (formName) => ([{
    TextArea: {
        props: {
            formName,
            name: 'comment',
            required: true,
            placeholder: 'Enter your comment here',

        },
    },
}]);
