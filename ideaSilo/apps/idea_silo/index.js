const Desktop = require('./desktop');
const Mobile = require('./mobile');

const App = {
    type: 'App',
    name: 'Idea Silo',
    identifier: 'com.hub365.ideasilo',
    definition: { Desktop, Mobile },
};

module.exports = App;
