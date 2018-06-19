// facility-plans-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const modulesModel = require('./custom-model/plan-modules.model');
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const facilityPlans = new Schema({
    facilityId :{type:Schema.Types.ObjectId, required: true},
    planTypeId :{type:Schema.Types.ObjectId, required: true},
    plans:[modulesModel],
    rate:{type:Number,required: false},
    expirationDate:{type:Date, required: false},
    isActive:{type:Boolean, required: false}

  }, {
    timestamps: true
  });

  return mongooseClient.model('facilityPlans', facilityPlans);
};
