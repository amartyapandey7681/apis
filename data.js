const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const data = new Schema({
    _id                 :{ type: String },
    Name                : String,
    City                : String,
    Disease             : String

}, {
    timestamps: {
        createdAt: "_created_at",
        updatedAt: "_updated_at"
    },
    versionKey: false
})

module.exports = mongoose.model('data',data,'data');