// plan-types-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const modulesModel = require('./custom-model/plan-modules.model');
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const planTypes = new Schema({
    name: { type: String, required: true },
    modules: [modulesModel],
    cost:{type:Number,required: false},
    rate:{type:Number,required: false},
  }, {
    timestamps: true
  });

  return mongooseClient.model('planTypes', planTypes);
};
