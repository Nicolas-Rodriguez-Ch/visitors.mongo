const mongoose = require('mongoose');

const VisitorSchema = mongoose.Schema({
    date: {type: Date, default: Date.now },
    name : String
});

const Visitor = mongoose.model("Visitor", VisitorSchema);
module.exports = Visitor;