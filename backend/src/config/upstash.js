import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import path from "path";
import { fileURLToPath } from "url";

import dotenv from "dotenv";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, "../.env") });

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(100, "60 s"), // only 100 request per 60 second
  // limiter: Ratelimit.slidingWindow(5, "20 s"), //just for testing purpose
});

export default ratelimit;
