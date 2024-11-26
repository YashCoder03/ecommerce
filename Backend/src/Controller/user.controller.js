const userModel = require("../model/user.model")
const createUser = async(req,res) => {

    const {name,email,mobile,password} = req.body;
    if(!name || !mobile || !email || !password ){
        res.status(400).send('Please enter all fields');
    }
    const user = {
        name,
        email,
        mobile,
        password
    }
    const newUser = new userModel(user)
    newUser.save();

    res.send('creating user');

}
const loginUser = (req,res) =>{
    res.send('login user');

}
const forgotPassword = (req,res) => {

}

module.exports = { createUser,loginUser,forgotPassword}