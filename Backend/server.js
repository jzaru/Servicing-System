import express, { Router } from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import {} from './src/Routes/Auth.Routes'

// Load environment variables
dotenv.config();

const app = express();
const limiter = rateLimit({
  windowMs: 30 * 60 * 1000,
  limit: 100,
  standardHeaders: true,
  legacyHeaders: false
});

app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175'], credentials: true }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(limiter);

app.get('/status', (req, res) => {
  res.status(200).json({ status: 'ok', message: '[ EXPRESS SERVER IS RUNNING ]' });
  console.log('[ EXPRESS SERVER IS RUNNING ]');
});

const PORT = process.env.Port || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
