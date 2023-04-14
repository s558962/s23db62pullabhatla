const mongoose = require("mongoose")
const bagsSchema = mongoose.Schema({
    bags_name: String,
    bags_type: String,
    bags_cost: String
})

module.exports = mongoose.model("bags",bagsSchema)