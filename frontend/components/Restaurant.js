import React, { useEffect } from 'react';
import { fetchRestaurant, clearRestaurant } from '../redux/restaurant';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';

const Restaurant = () => {
const dispatch = useDispatch();
const navigate = useNavigate();
const restaurantStatus = useSelector(state => state.restaurant.status);
const restaurant = useSelector(state => state.restaurant.restaurant);

useEffect(() => {
  if (restaurantStatus === 'idle') {
    dispatch(fetchRestaurant());
  }
}, [restaurantStatus, dispatch]);

const onClick = (event) => {
  event.preventDefault();
  dispatch(clearRestaurant());
  navigate('/preferences');
};

let content;

if (restaurantStatus === 'loading') {
  content = <p>Loading</p>
} else if (restaurantStatus === 'succeeded') {
  content = (
    <div>
      <p>This is where you're eating: {restaurant.name}</p>
      <p>{restaurant.vicinity}</p>
      <p>Rating: {restaurant.rating}</p>
      <Button variant="dark" onClick={onClick}>Reroll</Button>
    </div>
  )
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
