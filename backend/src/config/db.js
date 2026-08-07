import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongodb connected");
  } catch (error) {
    console.error("Error Connectiong to MANGODB", error);
    process.exit(1); // 1 means exit with failure
  }
};
