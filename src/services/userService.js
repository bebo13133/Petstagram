const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('../lib/jwt')
const {SECRET_KEY} = require('../config/config')


exports.login = async (username, password) => {

    const user = await User.findOne({ username});
    if (!user) throw new Error("Cannot find user or password!!")

    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) throw new Error("Passwords do not match")

    const payload = {
        _id: user._id,
        username: username.username,
    }

    const token = jwt.sign(payload, SECRET_KEY, {expiresIn: '2d'})

    return token;
};


exports.register = async (userData) =>{
    const user = await User.findOne({username: userData.username});
    if(user){
        throw new Error('This name is already in use')
    }

    return User.create(userData);
} 

    