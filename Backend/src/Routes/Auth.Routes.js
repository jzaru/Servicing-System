import express from 'express';
import Register from './../Auth/Auth.Register.js'

const Authrouter = express.Router();

Authrouter.post('/Register', Register);



export default Authrouter;
