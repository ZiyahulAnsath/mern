const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{type:String,required:true},
    city:{type:String,required:true},
    age:{type:Number,required:true}
});

const User = mongoose.model('User',userSchema);

module.exports = User;