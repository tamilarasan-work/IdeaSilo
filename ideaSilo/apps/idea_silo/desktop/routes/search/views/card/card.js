const speedDial = require('../table/speedDial');

module.exports = (path) => ({
    Card: {
        props: {
            styles: {
                height: '128px',
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
            ],
        },
    },
});
