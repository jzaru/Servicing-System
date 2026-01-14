import { ConsoleLog, ConsoleError } from '../lib/logger.js';
import Database from '../lib/connection.js';
import userSchema from '../Model/StaticUser.js';
import dotenv from 'dotenv';
import path from 'path';
import __dirname from '../lib/dirname.js';

dotenv.config({path: path.join(__dirname, 'config', '.env')})

const db = new Database();
const log = false;
const salt = parseInt(process.env.salt);

async function Register(req, res) {
  ConsoleLog('[ REGISTER ROUTER ]', log);

  const {username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: "Missing Required Field" });
  }
  try {
    const collection = await db.Collection(0);
    const doc = await userSchema( username, email, password, salt );
    await collection.insertOne(doc);
    
    ConsoleLog('[ USER REGISTERED SUCCESSFULLY ]', log);
    return res.status(200).json({ success: true, message: 'Register Successful' });

  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ error: "There was an error with your registration" })
    }
    ConsoleError(`[ FAILED REGISTER ACCOUNT ]: ${error.message}`, log);
    return res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await db.Close();
  }

};

export default Register;