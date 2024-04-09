module.exports = (mutation, path, index) => ({
    action: 'api',
    arguments: {
        request: {
            url: 'https://api.hub365.work/graph',
            method: 'POST',
            withCredentials: true,
            data: {
                model: '65fbf5c7f7b0893c2aee9071',
                type: 'mutation',
                mutation,
                arguments: {
                    _id: `$data.${ path }`,

                },
            },
        },
        onSuccess: [
            {
                action: 'list',
                arguments: {
                    type: 'remove',
                    name: 'commentList',
                    index: `$data.${ index }`,
                },
            },
        ],
    },
});
