module.exports = [
    {
        type: 'Multiple',
        name: 'creator',
        label: 'Creator',
        search: true,
        defaultOpen: true,
        availableFilter: 'creator',
        data: {
            from: 'AGGS',
        },
    },
    {
        type: 'Multiple',
        name: 'status',
        label: 'Status',
        search: false,
        availableFilter: 'status',
        data: {
            from: 'AGGS',
        },
    },
];
