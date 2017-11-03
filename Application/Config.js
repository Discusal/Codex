let fs = require('fs');

module.exports = {

/**
 * Get app config
 */
    app: function() {
        return this.get('app');
    },

/**
 * Get db config
 */
    db: function() {
        this.get('db');
    },

/**
 * Get config file
 * @param {String} name File name
 */
    get: function(name) {
        let envPrefix = (process.env.NODE_ENV != 'production' ? '.development': '');
        let filePath = `${__dirname}/Config/${name}${envPrefix}.json`;

        return require(filePath);
    }
}