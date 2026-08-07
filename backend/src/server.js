// import express from "express";
// for using the import we should put type : module in package.json
// to make run like npm run dev or any we have to changed script in the package.json
// so for running the some changes in the same code we write npm run server so to make it easy we install nodemon as npm install nodemon -D then the pacakage.json dev we put nodemon
// for now we used npm run dev runs nodemon but for deploying we used     "start": "node server.js"
// we have commmon of api/notes to to make easy we used the noteRoutes.js

// mongodb+srv://<db_username>:jJLlspFEiqSZelYV@cluster0.s4lro0l.mongodb.net/?appName=Cluster0

import express from "express";
import noteRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config({ path: "./src/.env" });

// what is Endpoint
// Endpoint is combination of URL + HTTP method that lets client interact with specific resources

const app = express();

const PORT = process.env.PORT || 5001;

// connectDB();     we first connect port then database this is bad

// middleware that parses incoming HTTP requests with JSON payloads.
app.use(express.json()); // this middleware just parse JSON bodies: req.body in the () const { title, content } = req.body;) in controller\

app.use(rateLimiter);

// our simple custom middleware
// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} and Req URL is ${req.url} `);
//   next();
// });

app.use("/api/notes", noteRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("server started on PORT:", PORT);
  });
}); // database connect first then port
