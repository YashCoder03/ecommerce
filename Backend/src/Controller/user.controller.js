import userModel from "../model/user.model.js";
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
const loginUser = async(req,res) =>{
    res.send('login user');

}
const forgotPassword = async(req,res) => {

}

export default   { createUser,loginUser,forgotPassword};