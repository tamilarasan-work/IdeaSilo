module.exports = (path) => ({
    element: 'Modal',
    props: {
        title: 'Attach file',
        layout: [
            {
                Dropzone: {
                    // condition: {
                    //     operator: '===',
                    //     values: ['editIdea', formName],
                    // },
                    props: {
                        label: 'Upload file',
                        upload: {
                            action: 'API',
                            request: {
                                url: '`$data.app.settings.ideasFile.value`/upload',
                                method: 'POST',
                                withCredentials: true,
                                data: {
                                    file: '$data.files.0',
                                    tagToField: 'IdeaSiloId',
                                    tagToId: `$data.root.${ path }._id`,
                                },
                            },
                        },
                        onSuccess: [
                            {
                                action: 'api',
                                arguments: {
                                    from: 'HUB',
                                    request: {
                                        model: '65fbf5c2f7b0893c2aee9031',
                                        mutation: 'Update',
                                        arguments: {
                                            _id: `$data.root.${ path }._id`,
                                            fileId: '$data.response.value._id',
                                            fileName: '$data.response.value.name',
                                        },
                                    },
                                    onSuccess: [
                                        {
                                            action: 'rerender',
                                            arguments: {
                                                name: 'attachedFile',
                                                definition: {
                                                    props: {
                                                        drillDown: {
                                                            fileId: '$data.response.value.fileId',
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        {
                                            action: 'close',
                                            arguments: {
                                                element: 'Modal',
                                            },
                                        },
                                        {
                                            action: 'rerender',
                                            arguments: {
                                                name: 'attachButton',
                                                definition: {
                                                    props: {
                                                        drillDown: {
                                                            fileId: '$data.response.value.fileId',
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    ],
                                },
                            },

                        ],
                    },
                },
            },
        ],
    },
}
);
