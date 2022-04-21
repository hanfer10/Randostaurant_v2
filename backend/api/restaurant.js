const {Client} = require("@googlemaps/google-maps-services-js");
const router = require('express').Router();
require('dotenv').config();

const getRandomRestaurant = function (restaurants, prices) {
  const filteredRestaurants = restaurants.filter(restaurant => prices.includes(restaurant.price_level));
  const randomNum = Math.floor(Math.random() * filteredRestaurants.length)
  return filteredRestaurants[randomNum];
}

router.get('/', async (req, res, next) => {
  const client = new Client({});
  const preferences = req.query.preferences;
  let distance = preferences.distance * 1609.34;
  let prices = [];
  const price = JSON.parse(preferences.price);
  if (price.low) {
    prices.push(1);
  };
  if (price.medium) {
    prices.push(2);
  };
  if (price.high) {
    prices.push(3);
  };
  if (price.extreme) {
    prices.push(4);
  };
  client
        .placesNearby({
          params: {
            //location:
            radius: `${distance}`,
            key: process.env.google_maps_api,
            type: ['restaurant'],
          },
          timeout: 1000,
        })
        .then((res) => {
          const randomRestaurant = getRandomRestaurant(res.data.results, prices);
          res.json(randomRestaurant);
          console.log("This is where you're eating", randomRestaurant.name);
        })
        .catch((error) => {
          console.log("ERROR ERROR", error);
          res.sendStatus(400);
        })
});
