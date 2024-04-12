const comments = require('./comments');
const allComments = require('./allComments');

module.exports = {

    Stack: {
        props: {
            layout: [
                {
                    H3: {
                        props: {
                            styles: {
                                marginTop: '20px',
                                marginBottom: '10px',
                            },
                            children: 'Comments',
                        },
                    },
                },
                comments('root.root.root.idea'),
                {
                    Stack: {
                        props: {
                            styles: {
                                marginBottom: '50px',
                            },
                            layout: [{
                                Card: {
                                    props: {
                                        layout: [allComments],
                                    },
                                },
                            }],

                        },
                    },
                },

            ],
        },
    },
};
