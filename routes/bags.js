var express = require('express');
const bags_controlers= require('../controllers/bags');
var router = express.Router();
/* GET bagss */
router.get('/', bags_controlers.bags_view_all_Page );
/* GET detail bags page */
router.get('/detail', bags_controlers.bags_view_one_Page);
/* GET create bags page */
router.get('/create', bags_controlers.bags_create_Page);
/* GET create update page */
router.get('/update', bags_controlers.bags_update_Page);

router.get('/delete', bags_controlers.bags_delete_Page);
module.exports = router;