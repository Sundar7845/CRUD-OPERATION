import express from "express";
import movieRoute from "./routes/movies.js";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.json({ msg: "Hello CRUD" });
});

// CRUD functionality of movies

app.use("/movies", movieRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
