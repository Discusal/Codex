let router = require('express').Router();

router.get('/', function(request, response) {
    response.send('Hello world!');
});

module.exports = router;