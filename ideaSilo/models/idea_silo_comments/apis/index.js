const Create = require('./create');
const Delete = require('./delete');
const Read = require('./read');
const Update = require('./update');

const APIS = [
    Create,
    Delete,
    Read,
    Update,
];

module.exports = APIS;
