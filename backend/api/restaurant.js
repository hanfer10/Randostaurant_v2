const {Client} = require("@googlemaps/google-maps-services-js");
const router = require('express').Router();
require('dotenv').config();

const getRandomRestaurant = function (restaurants, prices) {
  const filteredRestaurants = restaurants.filter(restaurant => prices.includes(restaurant.price_level));
  const randomNum = Math.floor(Math.random() * filteredRestaurants.length)
  return filteredRestaurants[randomNum];
}

router.get('/', async (request, response, next) => {
  console.log("We made it!")
  const client = new Client({});
  const {preferences} = JSON.parse(request.query.preferences);
  const location = JSON.parse(request.query.location);
  let distance = preferences.distance * 1609.34;
  const latitude = location.latitude;
  const longitude = location.longitude;
  console.log(latitude, longitude)
  let prices = [2];
  const price = preferences.price;
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
  console.log(prices)
  client
        .placesNearby({
          params: {
            location: { lat: latitude, lng: longitude },
            radius: `${distance}`,
            key: process.env.google_maps_api,
            type: ['restaurant'],
          },
          timeout: 1000,
        })
        .then((apiResponse) => {
          const randomRestaurant = getRandomRestaurant(apiResponse.data.results, prices);
          response.json(randomRestaurant);
          console.log("This is where you're eating", randomRestaurant.name);
        })
        .catch((error) => {
          console.log("ERROR ERROR", error);
          response.sendStatus(400);
        })
});

module.exports = router;
