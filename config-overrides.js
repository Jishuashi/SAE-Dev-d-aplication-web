const { override } = require('react-app-rewired');

module.exports = function override(config, env) {
    config.externals = ['fs'];
    return config;
};