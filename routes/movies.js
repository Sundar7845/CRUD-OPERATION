import express from "express";
import {
  MovieCreate,
  MovieDelete,
  MovieIndex,
  MovieUpdate,
} from "../controllers/movies.js";

const router = express.Router();

// C - For Create a moive
router.get("/", MovieIndex);

// U - For update a moive
router.post("/", MovieCreate);

// D - For Create a moive
router.put("/:id", MovieUpdate);

// C - For Create a moive
router.delete("/:id", MovieDelete);

export default router;
