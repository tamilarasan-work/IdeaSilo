const Create = require('./create');
const Delete = require('./delete');
const Read = require('./read');
const ReadOne = require('./read_one');
const Update = require('./update');
const IdeaSiloSearch = require('./idea_silo_search');

const APIS = [
    Create,
    Delete,
    Read,
    ReadOne,
    Update,
].concat(IdeaSiloSearch);

module.exports = APIS;
