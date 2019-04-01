// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
module.exports = function(app) {
    const mongooseClient = app.get('mongooseClient');
    const { Schema } = mongooseClient;
    const users = new Schema(
        {
            userName: { type: String, required: true },
            password: { type: String, required: true },
            email: { type: String, required: true },
            roleId: { type: String, required: false },
            firstName: { type: String, required: true },
            lastName: { type: String, required: false },
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
            collection: 'Users',
            toObject: { virtuals: true, getters: true },
            toJSON: { virtuals: true, getters: true }
        }
    );

    return mongooseClient.model('users', users);
};
