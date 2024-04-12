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
                            drillDown: {
                                fileId: '$data.root.idea.fileId',
                            },
                            layout: [
                                {
                                    Text: {

                                        condition: {
                                            operator: 'notEmpty',
                                            values: ['$data.root.fileId'],
                                        },
                                        props: {
                                            styles: {
                                                fontStyle: 'italic',
                                            },
                                            children: 'Attached file ',
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
                                                width: '12%',
                                                // fontSize: '13px',
                                                // color: '#365DF9',
                                                // textDecoration: 'underline',
                                            },
                                            to: 'https://files.hub365.work/download/`$data.root.fileId`',
                                            layout: [
                                                {
                                                    Image: {
                                                        props: {
                                                            styles: { size: 200 },
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
