import dotenv from 'dotenv';
import path from 'path';
import __dirname from '../lib/dirname.js';
import { userSchema } from "../Model/StaticUser.js";
import { InsertUserAccount } from '../Repository/Register.repository.js';
import bcrypt from 'bcrypt';

dotenv.config({ path: path.join(__dirname, 'config', '.env') })

/**
 * Handles user registration logic
 * @param {Object} param0 - user data
 * @param {string} param0.username - The user's username
 * @param {string} param0.email - The user's email
 * @param {string} param0.password - The user's password
 */

export async function RegisterService({ username, email, password }) {

  if (!username || !email || !password) {
    throw { status: 401, message: "failed to register" }
  }

  try {
    const salt = parseInt(process.env.salt);
    const hashehpassword = await bcrypt.hash(password, salt);

    const doc = await userSchema(username, email, hashehpassword);
    InsertUserAccount(doc);

  } catch (error) {
    throw { status: 500, mesasge: "Internal Server Error", error: error.message}
  }

}
