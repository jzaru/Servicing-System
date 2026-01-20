import path from 'path';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import __dirname from '../lib/dirname.js';

dotenv.config({path: path.join(__dirname, 'config', '.env')});

const key = process.env.Secret_key;

export function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: "No token" });

  const token = authHeader.split(" ")[1];
  const decoded = verifyToken(token);

  if (!decoded) return res.status(403).json({ error: "Invalid or expired token" });

  req.userId = decoded.id;
  next();
}


export function generateKey(user_id) {
  return jwt.sign({ id: user_id }, key);
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, key);
  } catch ( error ) {
    return null;
  }
}