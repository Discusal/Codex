let router  = require('express')(),
    index   = require('./Route/index.js'),
    library = require('./Route/library.js');

router.use('/', index);
router.use('/library', library);

module.exports = router;