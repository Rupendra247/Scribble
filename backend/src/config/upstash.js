import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

import dotenv from "dotenv";
dotenv.config({ path: "./src/.env" });

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(100, "60 s"), // only 100 request per 60 second
  // limiter: Ratelimit.slidingWindow(5, "20 s"), //just for testing purpose
});

export default ratelimit;
