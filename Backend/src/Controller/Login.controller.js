import { ConsoleLog, ConsoleError } from './../lib/logger.js';
import { LoginService } from '../Service/Login.service.js';

const log = false;

async function Login(req, res) {
  ConsoleLog('[ LOGIN ROUTER ]', log);

  if (!req.body) {
    return res.status(400).json({ error: "Login Request Parameter is Empty" });
  }

  try {
    const result = await LoginService(req.body);

    res.cookie("access_token", result.token, {
      httpOnly: true,
      secure: process.env.NODE_env === "production",
      samsite: "strict",
      maxage: 24 * 60 * 60 * 1000,
    })

    return res.status(200).json(result.response);

  } catch (error) {
    ConsoleError(`[ FAILED TO LOGIN ACCOUNT ]: ${error.message}`, log);

    return res.status(error.status || 500).json({ 
      error: error.message || "Internal Server Error" });
  }
};

export default Login; 