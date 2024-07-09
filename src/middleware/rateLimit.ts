import { NextApiRequest, NextApiResponse } from "next";
import { RateLimiterMemory } from "rate-limiter-flexible";

// Initialize the rate limiter
const rateLimiter = new RateLimiterMemory({
  points: 10, // Number of points
  duration: 60, // Per second
});

export default async function rateLimitHandler(
  req: NextApiRequest,
  res: NextApiResponse,
  callback: Function,
) {
  try {
    const keyGenerator = (req: NextApiRequest) =>
      req.headers["x-forwarded-for"] ? req.headers["x-forwarded-for"][0] : req.connection.remoteAddress;
    await rateLimiter.consume(keyGenerator(req) ?? '');
    callback();
  } catch (rateLimiterRes) {
    return res.status(429).send("Too many requests");
  }
}
