const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useFindAndModify', false); //DeprecationWarning: collection.findAndModify is deprecated.


const User = new Schema({
        username: String,
    },
    {
        timestamps: true
    });

exports.miningRig = mongoose.model('User', User);