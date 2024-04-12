module.exports = (mutation, id) => ([
    {

        url: 'https://api.hub365.work/graph',
        method: 'POST',
        withCredentials: true,
        data: {
            model: '65fbf5c2f7b0893c2aee9031',
            type: 'mutation',
            mutation,
            arguments: id ? {
                _id: `$data.${ id }`,
                title: '$data.title.value',
                description: '$data.description.value',
                status: '$data.status.value',

            } : {
                title: '$data.title.value',
                description: '$data.description.value',
                creator: '$data.user.name.first',
                status: '$data.status.value',
            },

        },
    },
]);
