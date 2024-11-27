import userModel from "../model/user.model.js";
const createUser = async(req,res) => {
    try{
        const {name,email,mobile,password} = req.body;
        if(!name || !mobile || !email || !password ){
            res.status(400).send('Please enter all fields');
            return;
        }
        const user = {
            name,
            email,
            mobile,
            password
        }
        const founduser = await userModel.findOne({email: email})
        if(founduser){
            res.send("Email Already Used");
            return;
        }
            const newUser = new userModel(user)
            newUser.save();
        
            res.send('creating user');
    }
    catch(error){
        res.status(400).send("Some issues going on" + error);

    }

}
const loginUser = async(req,res) =>{
    const {email,password} = await req.body;

    if(!email || !password){
        res.send("Please Enter the Details")
        return;
    }
    const user = await userModel.findOne({email});
    if(user?.password == password){
        res.send("User Found");
        return;
    }
    res.send("User does not exist");
}
const forgotPassword = async(req,res) => {

}

export default   { createUser,loginUser,forgotPassword};