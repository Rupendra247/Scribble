import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit("my-rate-limit"); // we can put particular user get their own limit but now simple we can simply cahnge the my-rate-limit to userid

    if (!success) {
      return res.status(426).json({
        message: "Too many request, please try again",
      });
    }
    next();
  } catch (error) {
    console.log("rate limit error", error);
    next(error);
  }
};

export default rateLimiter;
