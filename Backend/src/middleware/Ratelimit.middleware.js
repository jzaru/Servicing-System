import { rateLimit, ipKeyGenerator } from 'express-rate-limit';

export const Requestlimiter = rateLimit({
  windowMs: 30 * 60 * 1000,
  limit: 100,
  standardHeaders: true,
  legacyHeaders: false,
  statusCode: 429
});

export const loginlimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 5,
  message: "Too many failed login attempt",
  headers: true,

  keyGenerator: (req) => {
    return ipKeyGenerator(req.ip);
  },
  skipSuccessfulRequests: true
});