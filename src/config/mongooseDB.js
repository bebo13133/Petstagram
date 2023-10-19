const mongoose = require('mongoose')


//TODO: CHANGE DB NAME mongodb://127.0.0.1:27017/name - заместваме според задачата
const uriPets = 'mongodb://0.0.0.0:27017/pets'

async function connectDB (){

await mongoose.connect(uriPets,function(err, db) {
    if (err) {
      throw err;
    }
    console.log('db connected on port')
    db.close()
  })
}
module.exports = connectDB

