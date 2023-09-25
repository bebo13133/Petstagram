const {mongoose} = require('mongoose');

const photoSchema = new mongoose.Schema({

name: {
    type: String,
    required: true,
    minLength:[3, 'characters required minimum with 3 length'],
    maxLength:[40, 'characters required maximum with 40 length'],
    match: [/^[A-Za-z0-9]+$/, 'Username must be english'],   //? да се види имали го като условие 
},
image:{
    type: String,
    required: true,
},
age:{
    type: Number,
    required: true,
},
description:{
    type: String,
    required: true,
    minLength:[3, 'characters required minimum with 3 length'],
    maxLength:[200, 'characters required maximum with 200 length'],
},
location:{
    type: String,
    required: true,
},
commentList:{

},
owner:{
    type: mongoose.Types.ObjectId,
    ref: 'User',
},

})