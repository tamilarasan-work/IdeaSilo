const lightbox = require('./lightbox');

module.exports = {
    right: [
        {
            Button: {
                props: {
                    children: 'Add Idea',
                    icon: 'plus',
                    onClick: {
                        action: 'open',
                        arguments: lightbox,
                    },
                },
            },
        },
    ],
};
