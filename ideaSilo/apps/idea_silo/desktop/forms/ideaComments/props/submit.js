module.exports = (mutation, id) => ([
    {
        url: 'https://api.hub365.work/graph',
        method: 'POST',
        withCredentials: true,
        data: {
            model: '65fbf5c7f7b0893c2aee9071',
            type: 'mutation',
            mutation,
            arguments: id ? {
                _id: `$data.${ id }`,
                comment: '$data.comment.value',
            } : {
                ideaId: '$data.router.params.idea',
                comment: '$data.comment.value',
                creator: '$data.user.name.first',
            },
        },
    },
]);
