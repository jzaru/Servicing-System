
import { ReportSchema } from "../Model/StaticReport.js";
import { InsertReport, ReportList } from "../Repository/Report.repository.js";

/**
 * Handle report logic
 * @param {object} param0 - Report data 
 * @param {string} param0.userid - User unique id
 * @param {string} param0.title - Title of report
 * @param {string} param0.description - details of reports
 * 
 * Handle records list
 * @returns {Array} 
 */

export async function UserReportService({ userid, title, description }) {

  if (!userid || !title || !description) {
    throw { status: 400, message: "Failed to File Report please fill required parameter" };
  }

  const doc = await ReportSchema(
    userid,
    title,
    description);

  await InsertReport(doc);

}

export async function UserReportList() {
  return await ReportList();
}
