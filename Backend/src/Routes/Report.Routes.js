import express from 'express';
import { FileReport, ReportDisplay } from '../Controller/Report.controller.js';
import { authMiddleware } from '../middleware/Auth.middleware.js';

const ReportRoutes = express.Router();

ReportRoutes.post('/v1/FileReport', authMiddleware, FileReport);
ReportRoutes.get('/v1/DisplayReport', authMiddleware, ReportDisplay);

export default ReportRoutes;