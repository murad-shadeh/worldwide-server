"use strict";
const express = require("express");
const cors = require("cors");
const { cities } = require("./cities.json");
const app = express();
app.use(cors());
console.log(cities);
// constructor
function City(cityName, country, emoji, date, notes, position, id) {
  this.cityName = cityName;
  this.country = country;
  this.emoji = emoji;
  this.date = date;
  this.notes = notes;
  this.position = position;
  this.id = id;
  City.allData.push(this);
}
City.allData = [];

const homeHandler = (req, res) => {
  cities.map(
    (cityItem) =>
      new City(
        cityItem.cityName,
        cityItem.country,
        cityItem.emoji,
        cityItem.date,
        cityItem.notes,
        cityItem.position,
        cityItem.id
      )
  );
  res.status(200).json({
    code: 200,
    message: City.allData,
  });
};
// the end point
app.get("/", homeHandler);

app.listen(3000, () => {
  console.log("Up and running on PORT 3000");
});
