import Database from "./connection.js";
import { ConsoleLog, ConsoleError } from "./logger.js";

const log = false;
export const database = new Database();

try {
  await database.Connection();
  ConsoleLog('[ DATABASE CONNECTED SUCCESSFULLY ]', log);
} catch (err) {
  ConsoleError('[ DATABASE CONNECTION FAILED ]', log);
  process.exit(1);
}