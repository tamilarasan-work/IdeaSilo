const Create = require('./create');
const Delete = require('./delete');
const Read = require('./read');
const ReadOne = require('./read_one');
const Update = require('./update');

const APIS = [
    Create,
    Delete,
    Read,
    ReadOne,
    Update,
];

module.exports = APIS;
