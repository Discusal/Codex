let router = require('express').Router();

router.get('/', function(request, response) {
    response.send('Library page');
});

module.exports = router;