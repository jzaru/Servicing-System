import { ConsoleLog, ConsoleError } from "../../lib/logger.js";
import Database from "../../lib/connection.js";
import AnnouncementSchema from "../../Model/StaticAnnouncement.js";

const db = new Database();
const log = true;
const db_collection = 'Announcement';

export async function PostAnnounce(req, res) {
  ConsoleLog('[ POST ANNOUNCEMENT ', log);

  if (!req.body) {
    return res.status(400).json({ error: "Announcement Failed Parameter is "})
  }
  try {
    const collection = await db.Collection(db_collection);
    const doc = await AnnouncementSchema(req);
    await collection.insertOne(doc);

    ConsoleLog('[ ANNOUNCEMENT IS ADDED SUCCESSFULLY ]');
    return res.status(200).json({ success: true, message: 'ANNOUNCEMENT ADDED'});

  } catch (error) {
    ConsoleError(`[ FAILED TO ADD ANNOUNCEMENT ]: ${error.message}`, log);
    return res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await db.Close();
  }

};

export async function DisplayAnnounce(req, res) {
  ConsoleLog('[ DISPLAYING ANNOUNCEMENT ]', log);

  try {
    const collection = await db.Collection(db_collection);    
    const post = collection.find({}).toArray();
    ConsoleLog('[ ANNOUNCEMENT IS RETRIEVE SUCCESSFULLY ]');
    return res.status(200).json({ success: true, display: post});
  } catch (error) {
    ConsoleError(`[ FAILED TO RETRIEVE ANNOUNCEMENT ]: ${error.message}`, log);
    return res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await db.Close();
  }
}
