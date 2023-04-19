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
/*exports.bags_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: bags delete DELETE ' + req.params.id);
};*/

// Handle bags update form on PUT.
/*exports.bags_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: bags update PUT' + req.params.id);
};// List of all bagss*/

// Handle bags delete on DELETE.
exports.bags_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await bags.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };

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

// for a specific bags.
exports.bags_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await bags.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};

//Handle bags update form on PUT.
exports.bags_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await bags.findById( req.params.id)
// Do updates of properties
if(req.body.bags_type)
toUpdate.bags_name = req.body.bags_name;
if(req.body.bags_type) toUpdate.bags_type = req.body.bags_type;
if(req.body.bags_cost) toUpdate.bags_cost = req.body.bags_cost;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};

// Handle a show one view with id specified by query
exports.bags_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await bags.findById( req.query.id)
    res.render('bagsdetail',
    { title: 'bags Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

// Handle building the view for creating a bags.
// No body, no in path parameter, no query.
// Does not need to be async
exports.bags_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('bagscreate', { title: 'bags Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle building the view for updating a bags.
// query provides the id
exports.bags_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await bags.findById(req.query.id)
    res.render('bagsupdate', { title: 'bags Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };


// Handle a delete one view with id from query
exports.bags_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await bags.findById(req.query.id)
    res.render('bagsdelete', { title: 'bags Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };