const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moduleModel = new Schema({
    name:{type:String, required: true},
    isConfirmed:{type:Schema.Types.Boolean,'default': false},
    createdAt: { type: Date, 'default': Date.now },
    updatedAt: { type: Date, 'default': Date.now }
});
module.exports = moduleModel;