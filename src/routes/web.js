// old

// import  express  from "express";

// let router = express.Router();

// const initWebRouter = (app) => {

// return app.use('/', router); 
// }

// module.exports = {
//     initWebRouter,
// };

// new

import express from 'express';


let router = express.Router();

const initWebRouter = (app) => {
    // sear
    // router.get('/login', accountController.loginPage); for login
    // router.get('/checkIn', middlewareController, homeController.checkInPage); for middelware to login

    // account

    // router.get('/', accountController.loginpage);
    router.get('/', (req, res) => {
        // Your route handling logic here
        res.send('Hello, world!');
    });

    app.use('/', router);
};

module.exports = {
    initWebRouter,
};