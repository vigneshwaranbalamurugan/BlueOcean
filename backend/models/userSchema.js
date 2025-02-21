const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
     type: String, 
     required: function () { 
        return !this.googleId; 
    } },
  email: {
     type: String, 
     required: true, 
     unique: true 
    },
  password: { 
    type: String, 
    required: function () { 
        return !this.googleId; 
    } },
  googleId: { 
    type: String, 
    unique: true, 
    sparse: true 
},
  profilePic: { 
    type: String, 
    default: '' 
},
isVerified: { 
    type: Boolean, 
    default: false 
},
verificationToken: { 
    type: String 
},
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;
