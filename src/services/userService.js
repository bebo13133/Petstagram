const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('../lib/jwt')
const {SECRET_KEY} = require('../config/config')

//TODO: LOGIN 
exports.login = async (username, password) => {

    const user = await User.findOne({ username});
    if (!user) throw new Error("Cannot find user or password!!")

    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) throw new Error("Passwords do not match")

    const payload = {
        _id: user._id,
        username: user.username,
        email: user.email,   //? optional property -според условието на задачата задаваме пропъртитата
    }

    const token = await jwt.sign(payload, SECRET_KEY, {expiresIn: '2d'})

    return token;
};

//TODO: REGISTER
exports.register = async (userData) =>{
    const user = await User.findOne({username: userData.username});
    if(user){
        throw new Error('This name is already in use')    //? Проверяваме за съществуващ вече user
    }

    return User.create(userData);
} 

    