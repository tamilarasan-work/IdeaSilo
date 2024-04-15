module.exports = (path) => ({
    Paper: {
        props: {
            drillDown: {
                idea: `$data.${ path }`,
            },
            layout: [
                {
                    Paragraph: {
                        props: {
                            contentType: 'html',
                            children: '$data.root.idea.description',
                        },
                    },
                },
                {
                    Stack: {

                        rerender: {
                            name: 'attachedFile',
                        },
                        props: {
                            // direction: 'row',
                            styles: {
                                width: '20%',

                            },
                            drillDown: {
                                fileId: '$data.root.idea.fileId',
                            },
                            layout: [
                                {
                                    Stack: {
                                        props: {
                                            direction: 'row',
                                            justify: 'space-between',
                                            styles: { marginTop: '20px' },
                                            layout: [
                                                {
                                                    Text: {

                                                        condition: {
                                                            operator: 'notEmpty',
                                                            values: ['$data.root.root.fileId'],
                                                        },
                                                        props: {
                                                            styles: {
                                                                fontStyle: 'italic',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                            },
                                                            children: 'Attached file ',
                                                        },
                                                    },
                                                },
                                                {
                                                    TextButton: {
                                                        condition: {
                                                            operator: 'notEmpty',
                                                            values: ['$data.root.root.fileId'],
                                                        },
                                                        props: {
                                                            styles: {},
                                                            icon: 'trash',
                                                            color: 'danger',
                                                            size: 'medium',
                                                            children: '',
                                                            onClick: {
                                                                action: 'api',
                                                                arguments: {
                                                                    request: {
                                                                        url: 'https://api.hub365.work/graph',
                                                                        method: 'POST',
                                                                        withCredentials: true,
                                                                        data: {
                                                                            model: '65fbf5c2f7b0893c2aee9031',
                                                                            type: 'mutation',
                                                                            mutation: 'Update',
                                                                            arguments: {
                                                                                _id: '$data.root.root.root.idea._id',
                                                                                fileName: '',
                                                                                fileId: '',
                                                                            },
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
                                                                                            fileId: '',
                                                                                        },
                                                                                    },
                                                                                },
                                                                            },
                                                                        },
                                                                        {
                                                                            action: 'rerender',
                                                                            arguments: {
                                                                                name: 'attachButton',
                                                                                definition: {
                                                                                    props: {
                                                                                        drillDown: {
                                                                                            fileId: '',
                                                                                        },
                                                                                    },
                                                                                },
                                                                            },
                                                                        },

                                                                    ],
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            ],
                                        },
                                    },
                                },

                                // {
                                //     Image: {
                                //         props: {
                                //             styles: { size: 200 },
                                //             src: 'https://files.hub365.work/thumbnail/`$data.root.root.idea.fileId`?size=40',
                                //         },
                                //     },
                                // },
                                {
                                    Link: {
                                        condition: {
                                            operator: 'notEmpty',
                                            values: ['$data.root.fileId'],
                                        },
                                        props: {
                                            styles: {
                                                // width: '12%',
                                                // fontSize: '13px',
                                                // color: '#365DF9',
                                                // textDecoration: 'underline',
                                            },
                                            to: 'https://files.hub365.work/download/`$data.root.fileId`',
                                            layout: [
                                                {
                                                    Image: {
                                                        props: {
                                                            // styles: { size: 200 },
                                                            src: 'https://files.hub365.work/thumbnail/`$data.root.root.fileId`?size=40',
                                                        },
                                                    },
                                                },
                                            ],
                                            // children: '$data.root.root.idea.fileName',
                                            target: '_blank',
                                        },
                                    },
                                },
                            ],
                        },
                    },
                },
                {
                    Paragraph: {
                        props: {
                            styles: {
                                paddingTop: '17px',
                                fontSize: '13px',
                            },
                            children: 'Created by : `$data.root.idea.creator`',
                        },
                    },
                },

            ],
        },
    },
});
