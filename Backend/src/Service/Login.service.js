import { FindUserbyUsername } from "../Repository/Login.repository.js";
import { generateKey } from "../middleware/Auth.middleware.js";
import fs from 'fs/promises';
import bcrypt from "bcrypt"

/**
 * Handles user Login logic
 * @param {Object} param0 - user data
 * @param {string} param0.username - The user's username
 * @param {string} param0.password - The user's password
 */

export async function LoginService({ username, password }, ip) {
  const user = await FindUserbyUsername(username);

  if (!user) {
    throw { status: 401, message: "Account not found" };
  }

  const match = await bcrypt.compare(password, user.Password);
  if (!match) {
    throw { status: 401, message: "Invalid Credential" };
  }

  const log = {
    time: new Date().toISOString(),
    ip: ip,
  };

  const token = generateKey(user._id.toString());
  fs.appendFile("./src/Monitoring/access.log", JSON.stringify(log) + "\n");
  return {
    token, response: {
      message: "Login Successful",
      userid: user._id.toString(),
      name: user.Profile_name || user.Username,
      username: user.Username,
      role: user.Role,
      profileImage: user.Profile_pic,
    }
  }
}

