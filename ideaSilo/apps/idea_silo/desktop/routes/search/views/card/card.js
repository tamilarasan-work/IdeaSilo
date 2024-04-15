const speedDial = require('../table/speedDial');

module.exports = (path) => ({
    Card: {
        props: {
            styles: {
                height: '145px',
                overflow: 'hidden',
            },
            layout: [
                {
                    Stack: {
                        props: {
                            direction: 'row',
                            justify: 'space-between',
                            layout: [
                                {
                                    H5: {
                                        props: {
                                            styles: {
                                                width: '200px',
                                                overflow: 'hidden',
                                                whiteSpace: 'nowrap',
                                                textOverflow: 'ellipsis',
                                            },
                                            children: `$data.root.root.${ path }.title`,
                                        },
                                    },
                                },
                                speedDial(`root.root.${ path }`, `root.root.${ path }.index`),
                            ],
                        },
                    },
                },
                {
                    Paragraph: {
                        props: {
                            size: 'sm',
                            styles: {
                                marginTop: '10px',
                                marginBottom: '10px',
                                height: '40px',
                                overflow: 'hidden',
                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis',

                                // '> p': {

                                //     overflow: 'hidden',
                                //     whiteSpace: 'nowrap',
                                //     textOverflow: 'ellipsis',
                                //     '> *': {
                                //         color: 'red',
                                //         whiteSpace: 'nowrap',
                                //         display: 'inline',
                                //     },

                                // },

                            },
                            contentType: 'html',
                            children: `$data.root.${ path }.description`,
                        },
                    },
                },
                {
                    Stack: {
                        props: {
                            styles: {
                                padding: '10px 0', gap: '4px', fontStyle: 'italic',
                            },
                            direction: 'row',
                            layout: [
                                {
                                    Text: {
                                        props: {
                                            styles: { fontSize: '13px', color: 'gray' },
                                            children: 'Created by',
                                        },
                                    },
                                },
                                {
                                    Text: {
                                        props: {
                                            styles: { fontSize: '13px', color: 'gray' },
                                            children: `$data.root.root.${ path }.creator`,
                                        },
                                    },
                                },
                            ],
                        },
                    },
                },
            ],
        },
    },
});
