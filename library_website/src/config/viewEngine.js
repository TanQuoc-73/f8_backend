import express from 'express';

let configViewEngine = (app) => {
    //config view engine
    
    app.set('view engine',"ejs");
    app.set('views', '/library_website/src/views');

    
    //config static file
    app.use(express.static('/library_website/src/public'));
}

module.exports = configViewEngine;