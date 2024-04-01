module.exports = (mutation, path, index) => ({
    action: 'api',
    arguments: {
        request: {
            url: 'https://api.hub365.work/graph',
            method: 'POST',
            withCredentials: true,
            data: {
                model: '65fbf5c2f7b0893c2aee9031',
                type: 'mutation',
                mutation,
                arguments: {
                    _id: `$data.${ path }._id`,

                },
            },
        },
        onSuccess: [
            {
                action: 'list',
                arguments: {
                    type: 'remove',
                    name: 'idea-table',
                    index: `$data.${ index }`,
                },
            },
            {
                action: 'searchCount',
                arguments: {
                    type: 'subtract',
                    name: 'idea-search',
                },
            },
        ],
    },
});
