// reports-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

module.exports = function(app) {
    const mongooseClient = app.get('mongooseClient');
    const { Schema } = mongooseClient;
    const reports = new Schema(
        {
            title: { type: String, required: true },
            description: { type: String, required: true },
            images: { type: Array, default: [] },
            dateGenerated: { type: String, requiered: true },
            //this field goes on all the models
            deleted: { type: Number, default: 0 }
        },
        {
            timestamps: true,
            collection: 'Reports',
            toObject: { virtuals: true, getters: true },
            toJSON: { virtuals: true, getters: true }
        }
    );

    return mongooseClient.model('reports', reports);
};
