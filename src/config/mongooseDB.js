const mongoose = require('mongoose')


//TODO: CHANGE DB NAME mongodb://127.0.0.1:27017/name - заместваме според задачата
const uriPets = 'mongodb://localhost:27017/petstagram'

async function connectDB (){

await mongoose.connect(uriPets,function(err, db) {
    if (err) {
      throw err;
    }
    console.log('db connected')
    db.close()
  })
}
module.exports = connectDB

