import express from 'express';
import { PostAnnounce, DisplayAnnounce } from '../Service/Announcement/PostAnnouncement.js';

const AnnouncementRouter = express.Router();

AnnouncementRouter.post('/v1/PostAnnouncement',PostAnnounce);
AnnouncementRouter.get('/v1/DisplayAnnouncement', DisplayAnnounce);

export default AnnouncementRouter;