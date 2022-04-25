import React, { useEffect } from 'react';
import restaurant, { fetchRestaurant } from '../redux/restaurant';
import { useDispatch, useSelector } from 'react-redux';

const Restaurant = () => {
const dispatch = useDispatch();
const restaurantStatus = useSelector(state => state.restaurant.status);
const restaurant = useSelector(state => state.restaurant.restaurant);
useEffect(() => {
  if (restaurantStatus === 'idle') {
    dispatch(fetchRestaurant());
  }
}, [restaurantStatus, dispatch]);

let content;

if (restaurantStatus === 'loading') {
  content = <p>Loading</p>
} else if (restaurantStatus === 'succeeded') {
  content = <p>This is where you're eating: {restaurant.name}</p>
} else if (restaurantStatus === 'failed') {
  content = <div>{error}</div>
}
  return (
    <div>
      {content}
    </div>
  )
};

export default Restaurant;
