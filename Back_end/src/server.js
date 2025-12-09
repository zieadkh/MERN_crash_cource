import express from "express";
import noteRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/ratelimiter.js";
import cors from "cors";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT|| 5001
const __dirname = path.resolve();



if (process.env.NODE_ENV !== "production") {
  app.use(
  cors({
  origin:"http://localhost:5173",
  })
);
}

app.use(express.json());//middleware
app.use(rateLimiter);
app.use("/api/notes", noteRoutes);


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname,"../Front_end/dist")));

  app.get("*",(req, res) => {
    res.sendFile(path.join(__dirname, "../Front_end", "dist", "index.html"));
  }); 
}


connectDB().then(() =>{
  app.listen(PORT, () =>{
  console.log("server started on port:", PORT);
  });
});


