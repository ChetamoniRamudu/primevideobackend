const express = require("express");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser());
const router = express.Router();
const Cards = require("../models/movie.js");
//const { default: axios } = require("axios");
router.post("/cards", async (req, res) => {
  try {
const res = axios.get(
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a29184cba69043e2539ab9aad610a707"
);
const data = res.data;
console.log(data);


   // const data = res.data;
    console.log(data.results[0]);
    const { title,overview,}=data.results[0]
    const cards = await Cards.insert({title,overview,rating,releasedate,posterimage});
    return res.status(200).json({
      message: "success",
      cards,
    });
  } catch (e) {
    res.status(500).json({
      error: e.message,
    });
  }
});
router.get("/cards", async (req, res) => {
  try {
    const allcards = await Cards.find();
    return res.json({
      status: "success",
      allcards,
    });
  } catch (e) {
    return res.status(500).json({
      status: "failed to fetch the data",
      message: e.message,
    });
  }
});
router.put("/cards/:id", async (req, res) => {
  try {
    const allcards = await Cards.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { clicked: true } }
    );
    return res.json({
      status: "success",
      message: "clicked to true",
      allcards,
    });
  } catch (e) {
    res.status(500).json({
      status: "card not found",
      error: e.message,
    });
  }
});
module.exports = router;
