var express = require('express');
const bags_controlers= require('../controllers/bags');
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }

/* GET bagss */
router.get('/', bags_controlers.bags_view_all_Page );
/* GET detail bags page */
router.get('/detail',secured,  bags_controlers.bags_view_one_Page);
/* GET create bags page */
router.get('/create', secured, bags_controlers.bags_create_Page);
/* GET create update page */
router.get('/update', bags_controlers.bags_update_Page);

router.get('/delete',secured, bags_controlers.bags_delete_Page);
module.exports = router;