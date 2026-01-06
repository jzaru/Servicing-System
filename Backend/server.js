import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import rateLimit from 'express-rate-limit';
import __dirname from './src/lib/dirname.js';
import Authrouter from './src/Routes/Auth.Routes.js'

// Load environment variables

dotenv.config({path: path.join(__dirname,'config', '.env')});
const app = express();
const limiter = rateLimit({
  windowMs: 30 * 60 * 1000,
  limit: 100,
  standardHeaders: true,
  legacyHeaders: false
});

app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175'], credentials: true }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb' }));
app.use(limiter);

app.use(Authrouter)

app.get('/status', (req, res) => {
  res.status(200).json({ status: 'ok', message: '[ EXPRESS SERVER IS RUNNING ]' });
  console.log('[ EXPRESS SERVER IS RUNNING ]');
});

const PORT = process.env.Port;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
