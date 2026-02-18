import express from "express";
import movieRoute from "./routes/movies.js";
import connectDB from "./lib/db.js";

const app = express();
const PORT = 5000;

//connect DB
connectDB();

app.get("/", (req, res) => {
  res.json({ msg: "Hello CRUD" });
});

// CRUD functionality of movies

app.use("/movies", movieRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
