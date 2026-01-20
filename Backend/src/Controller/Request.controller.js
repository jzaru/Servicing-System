import { ConsoleLog, ConsoleError } from "../lib/logger.js";
import { UserRequestService } from "../Service/UserRequest.service.js";
import { ShowRequestList } from "../Service/UserRequest.service.js";

const log = false;

export async function ServiceRequest(req, res) {
  ConsoleLog('[ SERVICE REQUEST ROUTER ]', log);

  if (!req.body) {
    return res.status(400).json({ error: "Register request parameter is empty" });
  }

  try {
    await UserRequestService(req.body);

    return res.status(200).json({ success: true, message: "Request sent" });

  } catch (error) {
    ConsoleError(`[ FAILED TO SEND REQUEST ] ${error.message}`, log);

    return res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function ServiceRequestDisplay(req, res) {
  ConsoleLog('[ DISPLAY SERVICE REQUEST ROUTER ]', log);

  try {
    const list = await ShowRequestList();

    return res.status(200).json({ request: list })
  } catch (error) {
    ConsoleError(`[ FAILED TO LOAD REQUEST LIST ] ${error.message}`, log);

    return res.status(500).json({ error: "Internal Server Error" });
  }
}