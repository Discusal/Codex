const appPath = './Application';

let express = require('express'),
    app     = express(),
    config  = require(appPath + '/Config.js'),
    router  = require(appPath + '/Router.js');

app.use(router);

app.listen(config.app().port, function() {
    if (config.app().debug)
        console.log('Codex started.');
});
