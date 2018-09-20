// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const users = new mongooseClient.Schema({
    apmisId: {type: String, unique: true},
    password: { type: String, required: true },
    loginCount: {type: Number, default : 0 },
    roleIds : [{type: Schema.Types.ObjectId}]
  },{
    timestamps: true
  });

  return mongooseClient.model('users', users);
};
