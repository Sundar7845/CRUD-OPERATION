import Movie from "../models/movie.js";

export const MovieIndex = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json({ msg: "Movies fetched successfully", movies });
  } catch (error) {
    res.json({ msg: error.message });
  }
};

export const MovieCreate = async (req, res) => {
  try {
    const movie = new Movie({
      title: req.body.title,
      year: req.body.year,
      director: req.body.director,
      actors: req.body.actors,
    });
    await movie.save();
    res.json({ msg: "Movie created successfully" });
  } catch (error) {
    res.json({ msg: error.message });
  }
};

export const MovieShow = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.json({ msg: "Movie fetched successfully", movie });
  } catch (error) {
    res.json({ msg: error.message });
  }
};

export const MovieUpdate = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id);

    if (movie === null) {
      return res.json({ msg: "Movie not found" });
    } else {
      movie.title = req.body.title;
      movie.year = req.body.year;
      movie.director = req.body.director;
      movie.actors = req.body.actors;
    }
    await movie.save();
    res.json({ msg: "Movie updated successfully" });
  } catch (error) {
    res.json({ msg: error.message });
  }
};

export const MovieDelete = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (movie === null) {
      return res.json({ msg: "Movie not found" });
    } else {
      await movie.deleteOne();
      res.json({ msg: "Movie deleted successfully" });
    }
  } catch (error) {
    res.json({ msg: error.message });
  }
};
