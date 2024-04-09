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
                            },
                            children: 'Comments',
                        },
                    },
                },
                comments('root.root.root.idea'),
                {
                    Stack: {

                        props: {

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
