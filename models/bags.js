const mongoose = require("mongoose")
const bagsSchema = mongoose.Schema({
    bags_name: {type : String, minlength : 1, maxlength:50},
    bags_type: String,
    bags_cost: {type : String, minlength : 1, maxlength:50}
})

module.exports = mongoose.model("bags",bagsSchema)