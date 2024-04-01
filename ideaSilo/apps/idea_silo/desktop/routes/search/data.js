module.exports = {
    table: {
        from: 'API',
        request: {
            url: 'https://api.hub365.work/graph',
            method: 'POST',
            withCredentials: true,
            data: {
                model: '65fbf5c2f7b0893c2aee9031',
                type: 'query',
                query: 'Read',
                arguments: {
                    page: '$data.page',
                    size: '$data.size',
                    query: '$data.query',
                },
                resolve: {
                    _id: true,
                    title: true,
                    description: true,
                },
            },
        },
        results: '$data.request.value.values',
        page: '$data.request.value.page_info.page',
        count: '$data.request.value.page_info.page.count',
        totalCount: '$data.request.value.page_info.total_count',
        totalPages: '$data.request.value.page_info.total_pages',
    },
};
