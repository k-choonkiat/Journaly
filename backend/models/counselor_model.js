const mongoose = require("mongoose")
const Schema = mongoose.Schema

const counselorSchema = new Schema({
    email:{
        type:String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    name:{type:String},
    phone:{type:String},
    specialty:{type:String}},
    {collection: 'counselors'}
    
);

module.exports = Counselor = mongoose.model('counselors',counselorSchema);