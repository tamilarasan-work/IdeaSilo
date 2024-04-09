const forms = require('../../../../forms');
const comment = require('./comment');

module.exports = {
    List: {
        props: {
            direction: 'column',
            fetchData: {
                from: 'API',
                request: {
                    url: 'https://api.hub365.work/graph',
                    method: 'POST',
                    withCredentials: true,
                    data: {
                        model: '65fbf5c7f7b0893c2aee9071',
                        type: 'query',
                        query: 'Read',
                        arguments: {
                            page: '$data.page',
                            size: '$data.size',
                            query: '$data.router.params.idea',
                        },
                        resolve: {
                            _id: true,
                            comment: true,
                            creator: true,
                            creatorId: true,
                        },
                    },
                },
                results: '$data.request.value.values',
                page: '$data.request.value.page_info.page',
                count: '$data.request.value.page_info.page.count',
                totalCount: '$data.request.value.page_info.total_count',
                totalPages: '$data.request.value.page_info.total_pages',

            },
            name: 'commentList',
            infiniteLoading: true,
            item: {

                layout: [
                    {
                        Stack: {
                            props: {
                                direction: 'row',
                                styles: {
                                    width: '100%',
                                    marginTop: '30px',
                                },
                                layout: [
                                    {
                                        Avatar: {
                                            props: {
                                                alt: '$data.root.root.creator',
                                                initials: true,
                                            },
                                        },
                                    },
                                    {
                                        Stack: {
                                            props: {
                                                styles: {
                                                    width: '100%',
                                                },
                                                layout: [
                                                    {
                                                        Stack: {
                                                            props: {
                                                                direction: 'row',
                                                                justify: 'space-between',
                                                                layout: [
                                                                    {
                                                                        Text: {
                                                                            props: {
                                                                                children: '$data.root.root.root.root.creator',

                                                                            },
                                                                        },
                                                                    },
                                                                    {
                                                                        Stack: {
                                                                            props: {
                                                                                direction: 'row',
                                                                                layout: [
                                                                                    {
                                                                                        TextButton: {
                                                                                            reducer: {
                                                                                                form: 'form',
                                                                                            },
                                                                                            condition: {
                                                                                                operator: 'and',
                                                                                                conditions:
                                                                                                [
                                                                                                    {
                                                                                                        operator: '===',
                                                                                                        values: ['$data.root.root.root.root.root.creatorId', '$data.user._id'],
                                                                                                    },
                                                                                                    {
                                                                                                        operator: 'nin',
                                                                                                        values: ['$data.reducer.form.show', 'editComment_`$data.root.root.root.root.root._id`'],
                                                                                                    }],
                                                                                            },
                                                                                            props: {
                                                                                                size: 'small',
                                                                                                icon: 'pen',
                                                                                                onClick: {
                                                                                                    action: 'form',
                                                                                                    arguments: {
                                                                                                        type: 'open',
                                                                                                        name: 'editComment_`$data.root.root.root.root.root._id`',

                                                                                                    },
                                                                                                },
                                                                                            },
                                                                                        },
                                                                                    },
                                                                                    {
                                                                                        FormButton: {
                                                                                            reducer: {
                                                                                                form: 'form',
                                                                                            },
                                                                                            condition: {
                                                                                                operator: 'and',
                                                                                                conditions: [
                                                                                                    {
                                                                                                        operator: '===',
                                                                                                        values: ['$data.root.root.root.root.root.creatorId', '$data.user._id'],
                                                                                                    },
                                                                                                    {
                                                                                                        operator: 'nin',
                                                                                                        values: ['$data.reducer.form.show', 'editComment_`$data.root.root.root.root.root._id`'],
                                                                                                    }],
                                                                                            },
                                                                                            props: {
                                                                                                size: 'small',
                                                                                                icon: 'trash',
                                                                                                color: 'danger',
                                                                                                confirmation: 'Delete',
                                                                                                onClick: forms.ideaComments.remove(
                                                                                                    'Delete',
                                                                                                    'root.root.root.root.root._id',
                                                                                                    'root.root.root.root.root.index',
                                                                                                ),
                                                                                            },
                                                                                        },
                                                                                    },
                                                                                    {
                                                                                        TextButton: {
                                                                                            reducer: {
                                                                                                form: 'form',
                                                                                            },
                                                                                            condition: {
                                                                                                operator: 'in',
                                                                                                values: ['$data.reducer.form.show', 'editComment_`$data.root.root.root.root.root._id`'],
                                                                                            },
                                                                                            props: {
                                                                                                icon: 'close',
                                                                                                onClick: {
                                                                                                    action: 'form',
                                                                                                    arguments: {
                                                                                                        type: 'close',
                                                                                                        name: 'editComment_`$data.root.root.root.root.root._id`',
                                                                                                    },
                                                                                                },
                                                                                            },
                                                                                        },
                                                                                    },
                                                                                    {
                                                                                        FormButton: {
                                                                                            reducer: {
                                                                                                form: 'form',
                                                                                            },
                                                                                            condition: {
                                                                                                operator: 'in',
                                                                                                values: ['$data.reducer.form.show', 'editComment_`$data.root.root.root.root.root._id`'],
                                                                                            },
                                                                                            props: {
                                                                                                icon: 'check',
                                                                                                formName: 'editComment_`$data.root.root.root.root.root._id`',
                                                                                                onClick: {
                                                                                                    action: 'form',
                                                                                                    arguments: {
                                                                                                        type: 'submit',
                                                                                                        name: 'editComment_`$data.root.root.root.root.root._id`',
                                                                                                    },
                                                                                                },
                                                                                            },
                                                                                        },
                                                                                    },
                                                                                ],
                                                                            },
                                                                        },
                                                                    },

                                                                ],
                                                            },
                                                        },
                                                    },
                                                    forms.ideaComments.edit('editComment', 'root.root.root', comment),

                                                ],
                                            },
                                        },
                                    },
                                ],
                            },
                        },

                    },

                ],
            },
        },
    },
};
