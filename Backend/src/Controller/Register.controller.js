import { ConsoleLog, ConsoleError } from '../lib/logger.js';
import { RegisterService } from '../Service/Register.service.js';

const log = false;

async function Register(req, res) {
  ConsoleLog('[ REGISTER ROUTER ]', log);

  if (!req.body) {
    return res.status(400).json({ error: "Register request parameter is empty" });
  }
  try {
    
    await RegisterService(req.body);

    return res.status(200).json({ success: true });

  } catch (error) {
    
    ConsoleError(`[ FAILED REGISTER ACCOUNT ]: ${error.message}`, log);
    return res.status(500).json({ error: 'Internal Server Error' });
  }

};

export default Register;