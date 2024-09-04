const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
}, { 
    timestamps: true,
    minimize: false
});

const User = mongoose.model('User', userSchema);
module.exports = User;