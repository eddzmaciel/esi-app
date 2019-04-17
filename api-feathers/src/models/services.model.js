// services-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
module.exports = function(app) {
    const mongooseClient = app.get('mongooseClient');
    const { Schema } = mongooseClient;
    const services = new Schema(
        {
            name: { type: String, required: true },
            description: { type: String, required: false },
            //this field goes on all the models
            deleted: { type: Number, default: 0 }
        },
        {
            timestamps: true,
            collection: 'Services',
            toObject: { virtuals: true, getter: true },
            toJSON: { virtuals: true, getters: true }
        }
    );

    return mongooseClient.model('services', services);
};
