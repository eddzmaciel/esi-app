// providers-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
module.exports = function(app) {
    const mongooseClient = app.get('mongooseClient');
    const { Schema } = mongooseClient;
    const providers = new Schema(
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
            entity: { type: String, required: false },
            city: { type: String, required: false },
            //this field goes on all the models
            deleted: { type: Number, default: 0 }
        },
        {
            timestamps: true,
            collection: 'Providers',
            toObject: { virtuals: true, getters: true },
            toJSON: { virtuals: true, getters: true }
        }
    );

    return mongooseClient.model('providers', providers);
};
