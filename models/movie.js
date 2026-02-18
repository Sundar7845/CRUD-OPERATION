import { model, Schema } from "mongoose";

const movieSchema = new Schema({
  title: { type: String, required: true, unique: true },
  year: { type: Number, required: true },
  director: { type: String, required: true },
  actors: { type: [String], required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Movie = model("Movie", movieSchema);
export default Movie;
