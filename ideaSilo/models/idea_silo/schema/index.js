const Fields = require('./fields');
const IdeaSilo = require('./idea_silo');
const UpdateIdeaSilo = require('./update_idea_silo');

module.exports = {
    Fields,
    Schema: IdeaSilo,
    IdeaSilo,
    UpdateSchema: UpdateIdeaSilo,
};
