var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var bags_controller = require('../controllers/bags');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// bags ROUTES ///
// POST request for creating a bags.
router.post('/bags', bags_controller.bags_create_post);
// DELETE request to delete bags.
router.delete('/bags/:id', bags_controller.bags_delete);
// PUT request to update bags.
router.put('/bags/:id', bags_controller.bags_update_put);
// GET request for one bags.
router.get('/bags/:id', bags_controller.bags_detail);
// GET request for list of all bags items.
router.get('/bags', bags_controller.bags_list);
module.exports = router;
