import { ConsoleLog, ConsoleError } from "../lib/logger.js";
import { AnnouncementService, AnnouncementServiceList } from "../Service/Announcement.service.js";

const log = true;

export async function PostAnnouncement(req, res) {
  ConsoleLog('[ POST ANNOUNCEMENT ]', log);

  if (!req.body) {
    return res.status(400).json({ error: "Announcement Request Parameter is Empty" });
  }
  try {

    await AnnouncementService(req.body);

    return res.status(200).json({ success: true, message: 'Announcement post' });

  } catch (error) {
    ConsoleError(`[ FAILED TO POST ANNOUNCEMENT ]: ${error.message}`, log);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export async function AnnouncementList(req, res) {
  ConsoleLog('[ DISPLAY ANNOUNCEMENT ROUTER ]', log);

  try {
    const list = await AnnouncementServiceList();

    return res.status(200).json({ request: list })
  } catch (error) {
    ConsoleError(`[ FAILED TO LOAD ANNOUNCEMENT LIST ] ${error.message}`, log);

    return res.status(500).json({ error: "Internal Server Error" });
  }
}
