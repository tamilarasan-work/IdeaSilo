module.exports = {
    creator: {
        field: 'creator.keyword',
        type: 'terms',
        size: 100,
    },
    status: {
        field: 'status.keyword',
        type: 'terms',
        size: 100,
    },
};
