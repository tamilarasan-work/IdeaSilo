const Fields = require('./fields');
const IdeaSiloComments = require('./idea_silo_comments');
const UpdateIdeaSiloComments = require('./update_idea_silo_comments');

module.exports = {
    Fields,
    Schema: IdeaSiloComments,
    IdeaSiloComments,
    UpdateSchema: UpdateIdeaSiloComments,
};
