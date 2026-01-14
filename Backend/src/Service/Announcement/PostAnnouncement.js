import { ConsoleLog, ConsoleError } from "../../lib/logger.js";
import Database from "../../lib/connection.js";
import AnnouncementSchema from "../../Model/StaticAnnouncement.js";

const db = new Database();
const log = false;

async function PostAnnounce(req, res) {
  ConsoleLog('[ POST ANNOUNCEMENT ', log);
  const { Title, Content, Createdby } = req.body;

  if ( !Title || !Content || !Createdby ) {
    return res.status(400).json({ error: "Failed to Post Announcement "})
  }
  try {
    const collection = await db.Collection(1);
    
    const doc = await AnnouncementSchema(
      Title,
      Content,
      Createdby
    );

    await collection.insertOne(doc);
    await db.Close();

    ConsoleLog('[ ANNOUNCEMENT IS ADDED SUCCESSFULLY ]');
    return res.status(200).json({ success: true, message: 'ANNOUNCEMENT POST'});

  } catch (error) {
    ConsoleError(`[ FAILED TO POST ANNOUNCEMENT ]: ${error.message}`, log);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default PostAnnounce;
