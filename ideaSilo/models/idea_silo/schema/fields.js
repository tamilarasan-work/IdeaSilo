const Fields = {
    _id: {
        type: 'string',
        format: 'objectId',
        parse: 'objectId',
    },
    /* !!! add fields here !!! */
    title: {
        type: 'string',
    },
    description: {
        type: 'string',
    },
    descriptionExc: {
        type: 'string',
        excerpt: {
            length: -1,
            field: 'description',
        },
    },
    status: {
        type: 'string',
    },
    creator: {
        type: 'string',
    },
    fileId: {
        type: 'string',
    },
    fileName: {
        type: 'string',
    },
    createdAt: {
        type: 'string',
        format: 'date-time',
        parse: 'date-time',
    },
    updatedAt: {
        type: 'string',
        format: 'date-time',
        parse: 'date-time',
    },
    creatorId: {
        type: 'string',
        format: 'objectId',
        parse: 'objectId',
    },
    updatedById: {
        type: 'string',
        format: 'objectId',
        parse: 'objectId',
    },
    isDeleted: {
        type: 'boolean',
        default: false,
    },
};

module.exports = Fields;
