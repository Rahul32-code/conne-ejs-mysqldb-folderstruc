import connection from "../config/connectDB";
import jwt from 'jsonwebtoken'
import md5 from "md5";
import request from 'request';
import e from "express";
require('dotenv').config();

const loginPage = async (req, res) => {
    return res.render("account/login.ejs");
}

modules.exports={
    loginPage
};
raf
