import express from "express";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.json({ msg: "Hello CRUD" });
});

// CRUD functionality of movies

// C - For Create a moive
app.get("/movies", (req, res) => {


});

// U - For update a moive
app.post("/movies", (req, res) => {


});

// D - For Create a moive
app.put("/movies/:id", (req, res) => {


});

// C - For Create a moive
app.delete("/movies/:id", (req, res) => {


});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
