module.exports = (formName) => ([
    {
        Stack: {
            props: {
                direction: 'row',
                layout: [
                    {
                        TextInput: {
                            props: {
                                styles: {
                                    width: '30%',

                                },
                                formName,
                                name: 'title',
                                label: 'Title',
                                required: true,
                                placeholder: 'Idea title',
                            },
                        },
                    },
                    {
                        Select: {
                            props: {
                                styles: {
                                    width: '20%',
                                },
                                formName,
                                name: 'status',
                                label: 'Status',
                                required: true,
                                none: false,
                                data: [
                                    {
                                        label: 'Draft',
                                        value: 'Draft',
                                    },
                                    {
                                        label: 'In progress',
                                        value: 'In progress',
                                    },
                                    {
                                        label: 'Completed',
                                        value: 'Completed',
                                    },
                                ],
                            },
                        },
                    },
                ],
            },
        },
    },

    {
        WYSIWYG: {
            props: {
                styles: {
                    width: '50.5%',
                },
                formName,
                name: 'description',
                label: 'Description',
                required: true,
                placeholder: 'Idea description',
                toolBar: [
                    ['link'],
                    [
                        {
                            indent: '-1',
                        },
                        {
                            indent: '+1',
                        },
                    ],
                    [
                        { direction: 'rtl' },
                    ],
                ],
            },
        },
    },

    // {
    //     Dropzone: {
    //         condition: {
    //             operator: '===',
    //             values: ['editIdea', formName],
    //         },
    //         props: {
    //             label: 'Upload file',
    //             upload: {
    //                 action: 'API',
    //                 request: {
    //                     url: '`$data.app.settings.ideasFile.value`/upload',
    //                     method: 'POST',
    //                     withCredentials: true,
    //                     data: {
    //                         file: '$data.files.0',
    //                         tagToField: 'IdeaSiloId',
    //                         tagToId: `$data.${ path }._id`,
    //                     },
    //                 },
    //             },
    //             onSuccess: [
    //                 {
    //                     action: 'api',
    //                     arguments: {
    //                         from: 'HUB',
    //                         request: {
    //                             model: '65fbf5c2f7b0893c2aee9031',
    //                             mutation: 'Update',
    //                             arguments: {
    //                                 _id: `$data.${ path }._id`,
    //                                 fileId: '$data.response.value._id',
    //                                 fileName: '$data.response.value.name',
    //                             },
    //                         },
    //                     },
    //                 },
    //             ],
    //         },
    //     },
    // },
]);
