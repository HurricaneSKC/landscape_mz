var mongoose = require("mongoose");
// SCHEMA SETUP
var mzmodelSchema = new mongoose.Schema({
    name: String,
    email: String,

});

module.exports = mongoose.model("Mzmodel", mzmodelSchema);