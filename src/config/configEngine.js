import  express  from "express";

const configViewEngine = (app) => {
    // set for the engine public
    app.use(express.static("./src/public"));

    // Set the view engine to EJS
    app.set('view engine', 'ejs');

    // Set the views directory
    app.set('views', './src/views');
};

export default configViewEngine;
