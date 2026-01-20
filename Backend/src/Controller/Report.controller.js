import { ConsoleLog, ConsoleError } from "../lib/logger.js";
import { UserReportService, UserReportList } from "../Service/Report.service.js";

const log = false

export async function FileReport(req, res) {
  ConsoleLog('[ FILE REPORT ROUTER ]', log);


  if (!req.body) {
    return res.status(400).json({ error: "Register request parameter is empty" });
  }

  try {

    await UserReportService();

    return res.status(200).json({ success: true, message: "report sent" })

  } catch (error) {
    ConsoleError(`[ FAILED TO FILED THE REPORT ]: ${error.message} `, log);

    return res.status(500).json({ error: "internal server error" })
  }
}

export async function ReportDisplay(req, res) {
  ConsoleLog('[ DISPLAY REPORT ROUTER ]', log);

  try {
    const list = await UserReportList();

    return res.status(200).json({ request: list })
  } catch (error) {
    ConsoleError(`[ FAILED TO LOAD REQUEST LIST ] ${error.message}`, log);

    return res.status(500).json({ error: "Internal Server Error" });
  }
}
