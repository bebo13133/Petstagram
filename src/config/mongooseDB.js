const mongoose = require('mongoose')


//TODO: CHANGE DB NAME mongodb://127.0.0.1:27017/name - заместваме според задачата
const uriPets = 'mongodb://0.0.0.0:27017/pets'

async function connectDB (){

await mongoose.connect(uriPets)

}
module.exports = connectDB