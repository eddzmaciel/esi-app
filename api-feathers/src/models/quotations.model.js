// quotations-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
module.exports = function(app) {
    const mongooseClient = app.get('mongooseClient');
    const { Schema } = mongooseClient;
    const quotations = new Schema(
        {
            folio: { type: Number, required: true, default: 0 },
            title: { type: String, required: true },
            date: { type: String, required: false },
            subject: { type: String, required: true },
            //it have to be object
            clientId: { type: String, required: false },
            description: { type: String, required: false },
            items: { type: Array, required: false, default: [] },
            attendant: { type: String, required: false },
            //this field goes on all the models
            deleted: { type: Number, default: 0 }
        },
        {
            timestamps: true,
            collection: 'Quotations',
            toObject: { virtuals: true, getters: true },
            toJSON: { virtuals: true, getters: true }
        }
    );

    return mongooseClient.model('quotations', quotations);
};
