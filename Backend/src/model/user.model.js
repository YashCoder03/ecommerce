const  {mongoose,Schema,Document} = require('mongoose');

const userSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    mobile : {
        type: String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
});

const user = mongoose.model('User',userSchema);

module.exports = user;