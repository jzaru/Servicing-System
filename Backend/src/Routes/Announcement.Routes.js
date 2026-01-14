import express from 'express';
import PostAnnounce from '../Service/Announcement/PostAnnouncement.js';
import DisplayAnnounce from '../Service/Announcement/DisplayAnnouncement.js';

const AnnouncementRouter = express.Router();

AnnouncementRouter.post('/v1/PostAnnouncement',PostAnnounce);
AnnouncementRouter.get('/v1/DisplayAnnouncement', DisplayAnnounce);

export default AnnouncementRouter;