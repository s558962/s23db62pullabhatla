var bags = require('../models/bags');
// List of all bagss

exports.bags_list = function(req, res) {
 res.send('NOT IMPLEMENTED: bags list');
};
// for a specific bags.
exports.bags_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: bags detail: ' + req.params.id);
};
// Handle bags create on POST.

exports.bags_create_post = async function(req, res) {
    console.log(req.body)
    let document = new bags();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"bags_type":"goat", "cost":12, "size":"large"}
    document.bags_name = req.body.bags_name;
    document.bags_type = req.body.bags_type;
    document.bags_cost = req.body.bags_cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// Handle bags delete form on DELETE.
exports.bags_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: bags delete DELETE ' + req.params.id);
};
// Handle bags update form on PUT.
exports.bags_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: bags update PUT' + req.params.id);
};// List of all bagss

// List of all bags
exports.bags_list = async function(req, res) {
    try{
    thebags = await bags.find();
    res.send(thebags);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };



// VIEWS
// Handle a show all view
exports.bags_view_all_Page = async function(req, res) {
    try{
    thebags = await bags.find();
    res.render('bags', { title: 'bagss Search Results', results: thebags });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };


   // Handle bags create on POST.
exports.bags_create_post = async function(req, res) {
    console.log(req.body)
    let document = new bags();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"bags_type":"goat", "cost":12, "size":"large"}
    document.bags_name = req.body.bags_name;
    document.bags_type = req.body.bags_type;
    document.bags_cost = req.body.bags_cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};