var mongoose = require("mongoose");
// SCHEMA SETUP
var mzmodelSchema = new mongoose.Schema({
    email: String,
});

module.exports = mongoose.model("Mzmodel", mzmodelSchema);

