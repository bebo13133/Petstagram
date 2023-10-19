const mongoose = require('mongoose')


//TODO: CHANGE DB NAME mongodb://127.0.0.1:27017/name - заместваме според задачата
const uriPets = 'mongodb-pedt:27017/pets'



// async function connectDB (){

// await mongoose.connect(uriPets)

// }
const connectDB = async () => {
    try {
      mongoose.set("strictQuery", false);
     await mongoose.connect(uriPets);
      console.log("Connected to Mongo Successfully!");
    } catch (error) {
      console.log(error);
    }
  };
module.exports = connectDB


