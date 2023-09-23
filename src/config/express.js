const cookieParser = require('cookie-parser');
const express = require('express');
const handlebars = require('express-handlebars');

// const cookieParser = require('cookie-parser');



module.exports =(app) =>{
    //TODO: ADD HANDLEBARS

    app.engine('hbs', handlebars.engine({
        extname: 'hbs',
    }))
    app.set('view engine', 'hbs');
    app.set('views','src/views');
    
    //TODO: ADD BODY PARSER
    app.use(express.urlencoded({ extended: false }))

    app.use(express.static('src/static'))
    //TODO: STATIC

}

