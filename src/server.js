import Express from "express";
// set view engien
import configViewEngine from "./config/configEngine.js";
// route
import routes from './routes/web.js';

// import con from "./config/connet.js";

// configuration
const app = Express();
const port = 8080;

// Configure view engine and views directory
configViewEngine(app);

// rout
routes.initWebRouter(app);

// routing
// app.get("/", (req, res) => {});

app.listen(port, (err) => {
    if(err){
        throw err;
    } else {
        console.log(`Connected success port: ${port}`);
    }
});

