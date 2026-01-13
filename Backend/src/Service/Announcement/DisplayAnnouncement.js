import { ConsoleLog, ConsoleError } from "../../lib/logger.js";
import Database from "../../lib/connection.js";

const db = new Database()
const log = false

export async function DisplayAnnounce(req, res) {
  ConsoleLog('[ DISPLAYING ANNOUNCEMENT ]', log);

  try {
    
    const collection = await db.Collection(1);
    const post = await collection.find({}).toArray();

    ConsoleLog('[ ANNOUNCEMENT IS RETRIEVE SUCCESSFULLY ]');
    return res.status(200).json({ success: true, display: post});
  } catch (error) {
    ConsoleError(`[ FAILED TO RETRIEVE ANNOUNCEMENT ]: ${error.message}`, log);
    return res.status(500).json({ error: 'Internal Server Error' });
  } 
}

export default DisplayAnnounce;