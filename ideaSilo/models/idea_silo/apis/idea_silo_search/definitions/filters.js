module.exports = {
    creator: {
        field: 'creator.keyword',
        type: 'terms',
        format: 'string',
    },
    status: {
        field: 'status.keyword',
        type: 'terms',
        format: 'string',
    },
};
