// clients-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
var mongoose = require("mongoose");
var ObjectId = mongoose.Schema.Types.ObjectId;

module.exports = function(app) {
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const clients = new Schema(
    {
      businessName: { type: String, required: true },
      firstName: { type: String, required: true },
      lastName: { type: String, required: false },
      rfc: { type: String, required: false },
      email: { type: String, required: false },
      phone: { type: String, required: false },
      addressFirst: { type: String, required: false },
      addressSecond: { type: String, required: false },
      zipCode: { type: String, required: false },
      entity: { type: ObjectId, required: false },
      city: { type: ObjectId, required: false },
      //this field goes on all the models
      deleted: { type: Number, default: 0 }
    },
    {
      timestamps: true,
      collection: "Clients",
      toObject: { virtuals: true, getters: true },
      toJSON: { virtuals: true, getters: true }
    }
  );

  return mongooseClient.model("clients", clients);
};
