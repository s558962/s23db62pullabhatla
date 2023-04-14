var express = require('express');
const bags_controlers= require('../controllers/bags');
var router = express.Router();
/* GET bagss */
router.get('/', bags_controlers.bags_view_all_Page );
module.exports = router;