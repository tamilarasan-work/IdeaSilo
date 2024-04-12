const IdeasFile = {
    name: 'ideasFile',
    parent: 'com.hub365.ideasilo',
    value: [],
    spec: {
        input: {
            type: 'String',
        },
        edit: [
            {
                TextInput: {
                    props: {
                        required: true,
                        label: 'Ideas Files',
                    },
                },
            },
        ],
    },
};

module.exports = IdeasFile;
