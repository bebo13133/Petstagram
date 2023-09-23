const cookieParser = require('cookie-parser');
const express = require('express');
const handlebars = require('express-handlebars');

// const cookieParser = require('cookie-parser');



module.exports =(app) =>{
    //TODO:  3. ADD HANDLEBARS

    app.engine('hbs', handlebars.engine({
        extname: 'hbs',
    }))
    app.set('view engine', 'hbs');
    app.set('views','src/views');
    
    //TODO: 1. ADD BODY PARSER
    app.use(express.urlencoded({ extended: false }))
    //TODO: 2. STATIC

    app.use(express.static('src/static'))

}

