const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    email:{
        type:String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    happy:[{type:String}],
    sad:[{type:String}],
    {collection: 'users'}
    
})

module.exports = User = mongoose.model('users',userSchema);